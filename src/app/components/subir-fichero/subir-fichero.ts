import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { ServiceFicheros } from '../../services/service.ficheros';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-subir-fichero',
  standalone: false,
  styleUrl: './subir-fichero.css',
  templateUrl: './subir-fichero.html',
})
export class SubirFichero {
  // Hacemos referencia a la caja del fichero del HTML
  @ViewChild("cajaFichero") cajaFicheroRef!: ElementRef;
  
  public mensaje: string = "";

  constructor(private _service: ServiceFicheros) {}

  subirImagen(event: any): void {
    // 1. Evitamos que recargue si estuviera en un form
    event.preventDefault();

    // 2. Recuperamos el archivo físico seleccionado en el input
    // .files es un array con los archivos seleccionados. Cogemos el primero [0]
    let files = this.cajaFicheroRef.nativeElement.files;
    
    if (files.length === 0) {
      this.mensaje = "Por favor, selecciona una imagen primero.";
      return;
    }

    let fileToUpload = files[0];
    let fileName = fileToUpload.name;

    // 3. Usamos FileReader nativo de JS para leer el archivo
    let reader = new FileReader();
    
    // Le decimos que lo lea y lo convierta a Base64
    reader.readAsDataURL(fileToUpload);

    // 4. onload se dispara automáticamente cuando FileReader termina de leer
    reader.onload = () => {
      // El resultado viene con la cabecera: "data:image/jpeg;base64,....."
      let base64StringCompleto = reader.result as string;

      // TRUCO DE PENSAR: Limpiamos la cabecera para quedarnos solo con el código base64 limpio.
      // Cortamos el string separando por la coma y nos quedamos con la segunda parte [1]
      let base64Limpio = base64StringCompleto.split(',')[1];

      // 5. Llamamos a nuestro servicio y enviamos el POST a Azure
      this._service.uploadFile(fileName, base64Limpio).subscribe({
        next: (response) => {
          this.mensaje = "¡Imagen subida al servidor con éxito!";
        },
        error: (err) => {
          this.mensaje = "Error subiendo la imagen: " + err.message;
        }
      });
    };

    reader.onerror = (error) => {
      this.mensaje = "Error leyendo el archivo en el navegador.";
    };
  }
  
}
