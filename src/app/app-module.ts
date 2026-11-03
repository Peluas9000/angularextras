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
import { LoginComponent } from './components/login-component/login-component';
import { ServiceEmpleados } from './services/service.empleados';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';

@NgModule({
  declarations: [
    App,
    SubirFicheroComponents,
    InformesPdfComponent,
    MenuComponent,
    ErrorComponent,
    EquipoComponent,
    LoginComponent,
    SubordinadosComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authTokenInterceptor,errorInterceptor])),
    provideToastService(),
    ServiceFicheros,
    ServiceEquipos,
    ServiceEmpleados
  ],
  bootstrap: [App],
})
export class AppModule {}
