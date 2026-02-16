import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'grammar-checker',
    loadComponent: () =>
      import('./grammar-checker/grammar-checker.page').then(
        (m) => m.GrammarCheckerPage
      ),
  },
  {
    path: '',
    redirectTo: 'grammar-checker',
    pathMatch: 'full',
  },
];
