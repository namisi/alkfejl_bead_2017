import {User} from './User';
import {Vehicle} from './Vehicle';

export class Rent {
  id: number;
  user: User;
  vehicle: Vehicle;
  startDate: Date;
  endDate: Date;

  constructor(user?: User, vehicle?: Vehicle, startDate?: Date, endDate?: Date, id?: number) {
    this.user = user;
    this.vehicle = vehicle;
    this.startDate = startDate;
    this.endDate = endDate;
    this.id = id;
  }
}
