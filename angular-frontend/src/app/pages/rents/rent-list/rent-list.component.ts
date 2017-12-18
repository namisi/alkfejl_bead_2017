import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Rent} from '../../../model/Rent';
import {RentService} from '../../../services/rent.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent {
  displayedColumns: String[] = ['user', 'vehicle', 'startDate', 'endDate'];
  rents: DataSource<any> = new RentDataSource(this.rentService);

  constructor(private rentService: RentService,  private authService: AuthService) {
    if (authService.isLoggedIn && authService.user.role === 'ADMIN') {
      this.displayedColumns.push('edit');
    }
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
