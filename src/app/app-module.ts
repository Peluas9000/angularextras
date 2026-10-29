import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SubirFichero } from './components/subir-fichero/subir-fichero';

@NgModule({
  declarations: [
    App,
    SubirFichero
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
