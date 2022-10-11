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
  selector: 'app-employee-basics-details',
  templateUrl: './employee-basics-details.component.html',
  styleUrls: ['./employee-basics-details.component.scss']
})
export class EmployeeBasicsDetailsComponent implements OnInit {


  matcher = new MyErrorStateMatcher();

  basicForm = new FormGroup({
    firstName : new FormControl('', [
      Validators.required
    ]),
    lastName : new FormControl('', [
      Validators.required
    ]),
    nameAadhar : new FormControl('', [
      Validators.required
    ]),
    Fathername : new FormControl('', [
      Validators.required
    ]),
    bithday : new FormControl('', [
      Validators.required
    ])
   
  });
  
  get firstName() { return this.basicForm.get('firstName'); }
  get lastName() { return this.basicForm.get('lastName'); }
  get nameAadhar() { return this.basicForm.get('nameAadhar'); }

  get Fathername() { return this.basicForm.get('Fathername'); }
  get bithday() { return this.basicForm.get('bithday'); }

  constructor() { }

  ngOnInit(): void {
  }
}
