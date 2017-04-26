import { CarComponent } from './car/car.component'
import { CarListComponent } from './car-list/car-list.component'
import{LoginComponent} from './login/login.component'
import {WelcomeComponent} from './welcome/welcome.component'
import { Route } from '@angular/router';

export const AppRoutes: Route[] = [
    { path: '', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'car/:id', component: CarComponent },
    { path: 'cars', component: CarListComponent }
];
