import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Rent} from '../../../model/Rent';
import {RentService} from '../../../services/rent.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent {
  displayedColumns: String[] = ['user', 'vehicle', 'startDate', 'endDate', 'edit'];
  rents: DataSource<any> = new RentDataSource(this.rentService);

  constructor(private rentService: RentService) {
  }

  delete(id: number) {
    this.rentService.delete(id)
      .subscribe(
        result => {
          this.rents = new RentDataSource(this.rentService);
        },
        error => {
          alert('You cannot delete this rent!');
        }
      );
  }

  toDate(timestamp: number): Date {
    return timestamp === null ? null : new Date(timestamp);
  }
}

export class RentDataSource extends DataSource<any> {
  constructor(private rentService: RentService) {
    super();
  }

  connect(): Observable<Rent[]> {
    return this.rentService.getRents();
  }

  disconnect() {
  }
}
