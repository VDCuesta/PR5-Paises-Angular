import { Routes } from '@angular/router';
import { AboutPageComponent } from '../shared/pages/about-page/about-page.component';
import { ContactPageComponent } from '../shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'countries',
        loadChildren: () => import('../countries/countries.routes')
                            .then(m => m.countriesRoutes)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent,
        title: 'Home page'
    },
    {
        path: 'about',
        component: AboutPageComponent,
        title: 'About page'
    },
    {
        path: 'contact',
        component: ContactPageComponent,
        title: 'contact'
    }
];

