import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'daily-summary',
    pathMatch: 'full',
  },
  {
    path: 'daily-summary',
    loadComponent: () => import('./pages/daily-summary/daily-summary.page').then( m => m.DailySummaryPage)
  },
  {
    path: 'stats',
    loadComponent: () => import('./pages/stats/stats.page').then( m => m.StatsPage)
  },
  {
    path: 'beer-catalog',
    loadComponent: () => import('./pages/beer-catalog/beer-catalog.page').then( m => m.BeerCatalogPage)
  },
  {
    path: 'add-beer',
    loadComponent: () => import('./pages/add-beer/add-beer.page').then( m => m.AddBeerPage)
  },

  {
    path: 'add-beer/:id',
    loadComponent: () => import('./pages/add-beer/add-beer.page').then( m => m.AddBeerPage)
  }
];
