import { Routes, RouterModule } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/songs',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/songs'
  }
];