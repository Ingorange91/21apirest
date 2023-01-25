import {  HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';

import { IndexComponent } from './pages/index/index.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { Error404Component } from './shared/Errores/error404/error404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    TalleresComponent,
    CalificacionesComponent,
    ContactanosComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CookieModule.withOptions(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
