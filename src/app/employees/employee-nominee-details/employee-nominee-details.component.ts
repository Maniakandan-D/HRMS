import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  selector: 'app-employee-nominee-details',
  templateUrl: './employee-nominee-details.component.html',
  styleUrls: ['./employee-nominee-details.component.scss']
})
export class EmployeeNomineeDetailsComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  nomineeForm = new FormGroup({
    dependents : new FormControl('', [
      Validators.required
    ]),
    nominee : new FormControl('', [
      Validators.required
    ])
  });
  get dependents() { return this.nomineeForm.get('dependents'); }
  get nominee() { return this.nomineeForm.get('nominee'); }
  constructor() { }

  ngOnInit(): void {
  }

}
