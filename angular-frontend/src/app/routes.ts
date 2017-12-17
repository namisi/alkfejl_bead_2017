import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {HelpComponent} from './pages/help/help.component';
import {ErrorComponent} from './pages/error/error.component';
import {Role} from './model/User';
import {RouteGuard} from './route.guard';
import {VehicleListComponent} from './pages/vehicles/vehicle-list/vehicle-list.component';
import {NewVehicleComponent} from './pages/vehicles/new-vehicle/new-vehicle.component';
import {RentListComponent} from './pages/rents/rent-list/rent-list.component';
import {NewRentComponent} from './pages/rents/new-rent/new-rent.component';

export const appRoutes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuard],
    children: [
      {path: '', redirectTo: 'help', pathMatch: 'full'},
      {path: 'login', component: LoginComponent, data: {roles: [Role.GUEST]}},
      {path: 'register', component: RegisterComponent, data: {roles: [Role.GUEST]}},
      {path: 'vehicles', component: VehicleListComponent, data: {roles: [Role.GUEST, Role.USER, Role.ADMIN]}},
      {path: 'vehicles/new', component: NewVehicleComponent, data: {roles: [Role.ADMIN]}},
      {path: 'rents', component: RentListComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'rents/new', component: NewRentComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'help', component: HelpComponent},
      {path: '**', component: ErrorComponent}
    ]
  }];
