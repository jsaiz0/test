
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Prueba1Component } from './components/prueba-1/prueba-1.component';

const appRoutes: Routes = [
    { path: 'prueba', component: Prueba1Component },
];

export const appRoutesProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
