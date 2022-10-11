import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-reference-details',
  templateUrl: './employee-reference-details.component.html',
  styleUrls: ['./employee-reference-details.component.scss']
})
export class EmployeeReferenceDetailsComponent implements OnInit {
  submitted: boolean;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    },  {updateOn: 'change' });
  }
  onSubmit(): void{
    this.submitted = true
  }
}
