import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-personal-details',
  templateUrl: './employee-personal-details.component.html',
  styleUrls: ['./employee-personal-details.component.scss']
})
export class EmployeePersonalDetailsComponent implements OnInit {
  submitted: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      initial: ['', Validators.required],
      firstName : ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName:['', Validators.required],
      motherName:['', Validators.required],
      fatherDOB: ['', Validators.required],
      motherDOB: ['', Validators.required],
    },  {updateOn: 'change' });
  }
  onSubmit(): void{
    this.submitted = true
  }
}
