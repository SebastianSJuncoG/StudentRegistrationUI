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
    path: 'subjects',
    loadComponent: () => import('./features/programs/pages/programs/subject-page/subject-page.component').then(m => m.SubjectPageComponent)
  },
  {
    path: '**', // Redirige a una página 404 para cualquier otra ruta
    redirectTo: '',
  },
  // ... otras rutas
];