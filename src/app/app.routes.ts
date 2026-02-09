import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./Pages/home/home').then(m => m.Home) 
    },
    { 
        path: 'barriojardin', 
        loadComponent: () => import('./Pages/sede-barrio-jardin/sede-barrio-jardin').then(m => m.SedeBarrioJardin) 
    },
    { 
        path: 'villabelgrano', 
        loadComponent: () => import('./Pages/sede-villa-belgrano/sede-villa-belgrano').then(m => m.SedeVillaBelgrano) 
    },
    { 
        path: 'villaallende', 
        loadComponent: () => import('./Pages/sede-villa-allende/sede-villa-allende').then(m => m.SedeVillaAllende) 
    },
    {
        path: 'terminos-y-condiciones',
        loadComponent: () => import('./Pages/terminos-y-condiciones/terminos-y-condiciones').then(m => m.TerminosYCondiciones)
    },
    {
        path: 'politica-de-privacidad',
        loadComponent: () => import('./Pages/politica-de-privacidad/politica-de-privacidad').then(m => m.PoliticaDePrivacidad)
    }
];