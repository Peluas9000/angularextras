import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubirFicheroComponents } from './components/subir-fichero-components/subir-fichero-components';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';

const routes: Routes = [
  {path:"",component:SubirFicheroComponents},
  {path:"informes",component:InformesPdfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
