import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material/material.module';

// Routes
import { routing, appRoutesProviders } from './app.routing';

import { AppComponent } from './app.component';
import { Prueba1Component } from './components/prueba-1/prueba-1.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Prueba1Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MaterialModule
  ],
  providers: [appRoutesProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
