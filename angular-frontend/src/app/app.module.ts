import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {HttpModule} from '@angular/http';
import {RegisterComponent} from './pages/register/register.component';
import {appRoutes} from './routes';
import {MaterialItemsModule} from './MaterialItemsModule';
import {MenuComponent} from './components/menu/menu.component';
import {StatsComponent} from './pages/stats/stats.component';
import {HelpComponent} from './pages/help/help.component';
import {ErrorComponent} from './pages/error/error.component';
import {RouteGuard} from './route.guard';

import {VehicleService} from './services/vehicle.service';
import {VehicleListComponent} from './pages/vehicles/vehicle-list/vehicle-list.component';
import {NewVehicleComponent} from './pages/vehicles/new-vehicle/new-vehicle.component';
import {RentService} from './services/rent.service';
// import {RentDetailComponent} from './pages/rents/rent-detail/rent-detail.component';
import {RentListComponent} from './pages/rents/rent-list/rent-list.component';
import {NewRentComponent} from './pages/rents/new-rent/new-rent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    StatsComponent,
    HelpComponent,
    ErrorComponent,
    // RentDetailComponent,
    RentListComponent,
    NewRentComponent,
    VehicleListComponent,
    NewVehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule
  ],
  providers: [
    AuthService,
    RouteGuard,
    RentService,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
