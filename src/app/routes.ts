import { CarComponent } from './containers/car/car.component';
import { CarListComponent } from './containers/car-list/car-list.component';
import { LoginComponent} from './containers/login/login.component';
import { WelcomeComponent} from './components/welcome/welcome.component';
import { Route } from '@angular/router';

export const AppRoutes: Route[] = [
    { path: '', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'car/:id', component: CarComponent },
    { path: 'cars', component: CarListComponent }
];
