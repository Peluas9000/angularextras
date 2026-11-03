import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubirFicheroComponents } from './components/subir-fichero-components/subir-fichero-components';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';

const routes: Routes = [
  {path:"",component:SubirFicheroComponents},
  {path:"informes",component:InformesPdfComponent},

  {path:"error",component:ErrorComponent},

  {path:"equipos",component:EquipoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
