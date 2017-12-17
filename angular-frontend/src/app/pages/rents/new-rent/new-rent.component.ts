import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rent} from '../../../model/Rent';
import {RentService} from '../../../services/rent.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.css']
})
export class NewRentComponent implements OnInit {
  rentForm: FormGroup = new FormGroup({
    licensePlateNr: new FormControl('', [Validators.required]),
    manufacturer: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    manufactureDate: new FormControl('', [Validators.required]),
    costPerDay: new FormControl('', [Validators.required])
  });

  constructor(private rentService: RentService, private router: Router) {

  }

  ngOnInit() {
  }

  get licensePlateNr() {
    return this.rentForm.get('licensePlateNr');
  }

  get manufacturer() {
    return this.rentForm.get('manufacturer');
  }

  get type() {
    return this.rentForm.get('type');
  }

  get manufactureDate() {
    return this.rentForm.get('manufactureDate');
  }

  get costPerDay() {
    return this.rentForm.get('costPerDay');
  }

  submit() {
    // this.rentService.create(
    //     new Rent(
    //       this.manufacturer.value,
    //       this.type.value,
    //       this.licensePlateNr.value,
    //       this.costPerDay.value,
    //       this.manufactureDate.value,
    //       null))
    //   .subscribe(
    //     res => this.router.navigate(['/rents']),
    //     err => console.log(err)
    //   );
  }
}
