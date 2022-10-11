import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || isSubmitted) //|| control.touched 
    );
  }
}

@Component({
  selector: 'app-employee-correspondence-details',
  templateUrl: './employee-correspondence-details.component.html',
  styleUrls: ['./employee-correspondence-details.component.scss']
})
export class EmployeeCorrespondenceDetailsComponent implements OnInit {

  @Output()
  formReady = new EventEmitter<FormGroup>();

  matcher = new MyErrorStateMatcher();
  correspondenceForm = new FormGroup({
    streetAddress : new FormControl('', [
      Validators.required
    ]),
    apartmentUnit : new FormControl('', [
      Validators.required
    ]),
    city : new FormControl('', [
      Validators.required
    ]),
    state : new FormControl('', [
      Validators.required
    ]),
  
    pincode : new FormControl('', [
      Validators.required
    ])
  });
  
  get streetAddress() { return this.correspondenceForm.get('streetAddress'); }
  get apartmentUnit() { return this.correspondenceForm.get('apartmentUnit'); }
  get city() { return this.correspondenceForm.get('city'); }
  get state() { return this.correspondenceForm.get('state'); }
  get pincode() { return this.correspondenceForm.get('pincode'); }

  constructor() { }

  ngOnInit(): void {
    this.formReady.emit(this.correspondenceForm);
  }

}
