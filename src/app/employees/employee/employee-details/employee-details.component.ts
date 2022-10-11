import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})

export class EmployeeDetailsComponent implements OnInit {
  employeeForm =this._formBuilder.group({});

  constructor(private _formBuilder: FormBuilder) { }

  femployeeForm = this._formBuilder.group({
    employeeForm: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  ngOnInit(): void {
  }
  save(){

  }
  onSubmit(){
   this.employeeForm.value;
  }
  addChildForm(name: string, group: FormGroup) {
    this.employeeForm.addControl(name, group);
  }
}
