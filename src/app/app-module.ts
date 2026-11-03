import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { SubirFicheroComponents } from './components/subir-fichero-components/subir-fichero-components';
import { BrowserModule } from '@angular/platform-browser';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceFicheros } from './services/service.ficheros';

@NgModule({
  declarations: [App, SubirFicheroComponents, InformesPdfComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(),provideHttpClient(),ServiceFicheros],
  bootstrap: [App],
})
export class AppModule {}
