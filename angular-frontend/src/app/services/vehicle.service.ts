import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Routes, Server} from '../utils/ServerRoutes';
import {Observable} from 'rxjs/Observable';
import {Vehicle} from '../model/Vehicle';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleService {

  constructor(private http: Http) {
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get(Server.routeTo(Routes.VEHICLES))
      .map(res => res.json());
  }

  create(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post(Server.routeTo(Routes.VEHICLES), vehicle)
      .map(res => res.json());
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.VEHICLES) + '/' + id);
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.VEHICLES) + '/' + id)
      .map(res => res.json());
  }

  update(vehicle: Vehicle) {
    return this.http.put(Server.routeTo(Routes.VEHICLES) + '/' + vehicle.id, vehicle)
      .map(res => res.json());
  }
}
