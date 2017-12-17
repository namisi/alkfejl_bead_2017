import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Vehicle} from '../../../model/Vehicle';
import {VehicleService} from '../../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {
  displayedColumns: String[] = ['licensePlateNr', 'manufacturer', 'type', 'manufactureDate', 'costPerDay', 'edit'];
  vehicles: DataSource<any> = new VehicleDataSource(this.vehicleService);

  constructor(private vehicleService: VehicleService) {
  }

  delete(id: number) {
    this.vehicleService.delete(id)
      .subscribe(
        result => {
          this.vehicles = new VehicleDataSource(this.vehicleService);
        },
        error => {
          alert('You cannot delete this vehicle!');
        }
      );
  }
}

export class VehicleDataSource extends DataSource<any> {
  constructor(private vehicleService: VehicleService) {
    super();
  }

  connect(): Observable<Vehicle[]> {
    return this.vehicleService.getVehicles();
  }

  disconnect() {
  }
}
