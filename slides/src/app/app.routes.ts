import { ngxPresentRoutes } from '@w11k/ngx-present';
import { Routes } from '@angular/router';

export const routes: Routes = [
  ...ngxPresentRoutes,
  { path: '**', redirectTo: 'slide'}
];
