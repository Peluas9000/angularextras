import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceFicheros } from '../../services/service.ficheros';

@Component({
  selector: 'app-subir-fichero-components',
  standalone: false,
  styleUrl: './subir-fichero-components.css',
  templateUrl: './subir-fichero-components.html',
})
export class SubirFicheroComponents {
  @ViewChild('cajaFichero') cajaFicheroRef!: ElementRef<HTMLInputElement>;
  public mensaje = '';
  public subiendo = false;

  constructor(private _service: ServiceFicheros) {}

  subirImagen(event: Event): void {
    event.preventDefault();

    const files = this.cajaFicheroRef.nativeElement.files;
    
    if (!files || files.length === 0) {
      this.mensaje = "Por favor, selecciona una imagen primero.";
      return;
    }

    const fileToUpload = files[0];
    const fileName = fileToUpload.name;

    // 1. Instanciamos el lector nativo de JS
    const reader = new FileReader();
    
    // 2. Le indicamos que convierta el fichero a Base64
    reader.readAsDataURL(fileToUpload);

    // 3. Este evento se dispara cuando la lectura termina
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        this.mensaje = 'No se pudo leer el archivo seleccionado.';
        return;
      }

      const base64StringCompleto = reader.result;

      // 4. Limpiamos la cabecera separando por la coma y cogiendo la 2ª parte
      const base64Limpio = base64StringCompleto.split(',')[1];

      if (!base64Limpio) {
        this.mensaje = 'No se pudo obtener el contenido del archivo.';
        return;
      }

      // 5. Enviamos la petición
      this.subiendo = true;
      this._service.uploadFile(fileName, base64Limpio).subscribe({
        next: () => {
          this.mensaje = "¡Imagen subida al servidor con éxito!";
          this.subiendo = false;
        },
        error: (err: Error) => {
          this.mensaje = "Error subiendo la imagen: " + err.message;
          this.subiendo = false;
        }
      });
    };

    reader.onerror = () => {
      this.mensaje = "Error leyendo el archivo en el navegador.";
      this.subiendo = false;
    };
  }
}
