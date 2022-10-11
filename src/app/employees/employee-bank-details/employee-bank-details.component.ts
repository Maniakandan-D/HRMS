import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
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
  selector: 'app-employee-bank-details',
  templateUrl: './employee-bank-details.component.html',
  styleUrls: ['./employee-bank-details.component.scss']
})
export class EmployeeBankDetailsComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  bankForm = new FormGroup({
    bankName : new FormControl('', [
      Validators.required
    ]),
    bankNo : new FormControl('', [
      Validators.required
    ]),
    bankAddress : new FormControl('', [
      Validators.required
    ])
  });
  
 
  get bankName() { return this.bankForm.get('bankName'); }
  get bankNo() { return this.bankForm.get('bankNo'); }
  get bankAddress() { return this.bankForm.get('bankAddress'); }
  constructor() { }

  ngOnInit(): void {
  }

}
