import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rent} from '../../../model/Rent';
import {RentService} from '../../../services/rent.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.css']
})
export class NewRentComponent implements OnInit {
  rentForm: FormGroup = new FormGroup({
    vehicle: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', )
  });

  constructor(private rentService: RentService, private router: Router, private authService: AuthService) {

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
    console.log(this.authService.user);
    this.rentService.create(
        new Rent(
          this.authService.user,
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
