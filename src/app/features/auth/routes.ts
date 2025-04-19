// features/auth/routes.ts
import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  { 
    path: 'signin', 
    loadComponent: () => import('./sign-in/sign-in.component').then(m => m.SignInComponent) 
  },
  { 
    path: 'signup', 
    loadComponent: () => import('./sign-up/sign-up.component').then(m => m.SignUpComponent) 
  },
  { 
    path: '', 
    redirectTo: 'signin', 
    pathMatch: 'full' 
  }
];