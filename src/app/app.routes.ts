import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'splash'
  },
  {
    path:'splash',
    loadComponent: ()=>import('./components/splash/splash.component').then(c=>c.SplashComponent)
  },
  {
    path:'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path:'**',
    loadComponent: ()=>import('./components/error/error.component').then(c => c.ErrorComponent)
  }
];
