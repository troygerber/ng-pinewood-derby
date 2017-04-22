import { CarComponent } from './car/car.component'
import { CarListComponent } from './car-list/car-list.component'
import { Route } from '@angular/router';

export const AppRoutes: Route[] = [
    { path: '', component: CarListComponent },
    { path: 'car/:id', component: CarComponent }
];
