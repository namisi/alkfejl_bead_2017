import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Routes, Server} from '../utils/ServerRoutes';
import {Observable} from 'rxjs/Observable';
import {Rent} from '../model/Rent';
import 'rxjs/add/operator/map';

@Injectable()
export class RentService {

  constructor(private http: Http) {
  }

  getRents(): Observable<Rent[]> {
    return this.http.get(Server.routeTo(Routes.RENTS))
      .map(res => res.json());
  }

  create(rent: Rent): Observable<Rent> {
    return this.http.post(Server.routeTo(Routes.RENTS), rent)
      .map(res => res.json());
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.RENTS) + '/' + id);
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.RENTS) + '/' + id)
      .map(res => res.json());
  }

  update(rent: Rent) {
    return this.http.put(Server.routeTo(Routes.RENTS) + '/' + rent.id, rent)
      .map(res => res.json());
  }

  sendMessage(id: number, message: String) {
    return this.http.post(Server.routeTo(Routes.RENTS + '/' + id + '/message'), {message});
  }
}
