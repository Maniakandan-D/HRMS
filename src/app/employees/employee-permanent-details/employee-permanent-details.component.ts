import { Component, OnInit } from '@angular/core';
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
  selector: 'app-employee-permanent-details',
  templateUrl: './employee-permanent-details.component.html',
  styleUrls: ['./employee-permanent-details.component.scss']
})
export class EmployeePermanentDetailsComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  permanentForm = new FormGroup({
    emailFormControl : new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    
    mobilePhone : new FormControl('', [
      Validators.required,
      Validators.email
    ])
  })
  get emailFormControl() { return this.permanentForm.get('emailFormControl'); }
  get mobilePhone() { return this.permanentForm.get('mobilePhone'); }
  
  constructor() { }

  ngOnInit(): void {
  }
 
  disableSelect = new FormControl(false);
}
