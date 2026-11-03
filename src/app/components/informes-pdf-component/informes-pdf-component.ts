import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  styleUrl: './informes-pdf-component.css',
  templateUrl: './informes-pdf-component.html',
})
export class InformesPdfComponent {
  generarDocumentoPDF() :void{
  let documento:jsPDF=new jsPDF();
  documento.setFontSize(20);
  documento.text("Informe de Ventas", 10, 10);
  documento.setFontSize(12);
  const headers=[["Nombres","Email","Edad"]];
    const data=[
      ["Juan Perez","juan@example.com","30" ],
      [ "Maria Gomez","maria@example.com","25" ],
      [ "Ayoub El Khatib","ayoub@example.com","35" ],
      [ "Ana Rodriguez","ana@example.com","28" ]
  ];

    autoTable(documento,{
      head:headers,
      body:data,
      startY:20
    })
    documento.save("informe_ventas.pdf");
}
}
