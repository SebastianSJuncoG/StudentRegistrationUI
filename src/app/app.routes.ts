import { Routes } from '@angular/router';

export const routes: Routes = [
  // Ruta principal del módulo de programas
  {
    path: 'programs',
    loadComponent: () => import('./features/programs/pages/programs/program-page/program-page.component').then(m => m.ProgramPageComponent)
  },
  {
    path: 'students',
    loadComponent: () => import('./features/programs/pages/programs/student-page/student-page.component').then(m => m.StudentPageComponent)
  },
  {
    path: '**', // Redirige a una página 404 para cualquier otra ruta
    redirectTo: '',
  },
  // ... otras rutas
];