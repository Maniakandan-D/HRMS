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
  selector: 'app-employee-spouse-details',
  templateUrl: './employee-spouse-details.component.html',
  styleUrls: ['./employee-spouse-details.component.scss']
})
export class EmployeeSpouseDetailsComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  
  spouseForm = new FormGroup({
    maritialStatus : new FormControl('', [
      Validators.required
    ]),
    spouseName : new FormControl('', [
      Validators.required
    ]),
    spouseEmployer : new FormControl('', [
      Validators.required
    ]),
    spousePhone : new FormControl('', [
      Validators.required
    ])
  });
  get spouseName() { return this.spouseForm.get('spouseName'); }
  get spouseEmployer() { return this.spouseForm.get('spouseEmployer'); }
  get spousePhone() { return this.spouseForm.get('spousePhone'); }
  constructor() { }

  ngOnInit(): void {
  }

}
