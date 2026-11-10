// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { TareaListaComponent } from './components/tarea-lista/tarea-lista.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareaListaComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/tareas' }
];
