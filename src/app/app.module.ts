import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cabecera } from './componentes/cabecera.component';
import { FormasComponent } from './componentes/formas/formas.component';
import { FormDatosComponent } from './componentes/form-datos/form-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    Cabecera,
    FormasComponent,
    FormDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
