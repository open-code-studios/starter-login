import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/routes').then(m => m.AUTH_ROUTES)
    },
];
