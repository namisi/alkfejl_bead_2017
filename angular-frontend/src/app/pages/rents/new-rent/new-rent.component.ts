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
    user: new FormControl('', [Validators.required]),
    vehicle: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', )
  });

  constructor(private rentService: RentService, private router: Router) {

  }

  ngOnInit() {
  }

  get user() {
    return this.rentForm.get('user');
  }

  get vehicle() {
    return this.rentForm.get('vehicle');
  }

  get startDate() {
    return this.rentForm.get('startDate');
  }

  get endDate() {
    return this.rentForm.get('endDate');
  }

  submit() {
    this.rentService.create(
        new Rent(
          this.user.value,
          this.vehicle.value,
          this.startDate.value,
          this.endDate.value
        ))
      .subscribe(
        res => this.router.navigate(['/rents']),
        err => console.log(err)
      );
  }
}
