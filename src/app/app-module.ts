import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { SubirFicheroComponents } from './components/subir-fichero-components/subir-fichero-components';
import { BrowserModule } from '@angular/platform-browser';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceFicheros } from './services/service.ficheros';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { ServiceEquipos } from './services/service.equipos';

@NgModule({
  declarations: [
    App,
    SubirFicheroComponents,
    InformesPdfComponent,
    MenuComponent,
    ErrorComponent,
    EquipoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideToastService(),
    ServiceFicheros,
    ServiceEquipos
  ],
  bootstrap: [App],
})
export class AppModule {}
