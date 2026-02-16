import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'random-user',
    loadComponent: () =>
      import('./random-user/random-user.page').then(
        (m) => m.RandomUserPage
      ),
  },
  {
    path: '',
    redirectTo: 'random-user',
    pathMatch: 'full',
  },
];
