import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../model/Vehicle';
import {VehicleService} from '../../../services/vehicle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  vehicleForm: FormGroup = new FormGroup({
    licensePlateNr: new FormControl('', [Validators.required]),
    manufacturer: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    manufactureDate: new FormControl('', [Validators.required]),
    costPerDay: new FormControl('', [Validators.required])
  });

  constructor(private vehicleService: VehicleService, private router: Router) {

  }

  ngOnInit() {
  }

  get licensePlateNr() {
    return this.vehicleForm.get('licensePlateNr');
  }

  get manufacturer() {
    return this.vehicleForm.get('manufacturer');
  }

  get type() {
    return this.vehicleForm.get('type');
  }

  get manufactureDate() {
    return this.vehicleForm.get('manufactureDate');
  }

  get costPerDay() {
    return this.vehicleForm.get('costPerDay');
  }

  submit() {
    this.vehicleService.create(
        new Vehicle(
          this.manufacturer.value,
          this.type.value,
          this.licensePlateNr.value,
          this.costPerDay.value,
          this.manufactureDate.value,
          null))
      .subscribe(
        res => this.router.navigate(['/vehicles']),
        err => console.log(err)
      );
  }
}
