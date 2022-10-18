import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { Employee } from '../shared/employee.model';

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

  constructor() { }

  ngOnInit(): void {
  }
  disableSelect = new FormControl(false);
}
