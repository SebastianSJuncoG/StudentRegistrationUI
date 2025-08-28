import { Routes } from '@angular/router';
import { ProgramPageComponent } from './pages/programs/program-page/program-page.component';

export const PROGRAMS_ROUTES: Routes = [
  {
    path: 'programs', // Cambia 'program' a 'programs' para que coincida con tu URL
    component: ProgramPageComponent
  }
];