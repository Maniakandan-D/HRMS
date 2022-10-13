import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-reference-details',
  templateUrl: './employee-reference-details.component.html',
  styleUrls: ['./employee-reference-details.component.scss']
})
export class EmployeeReferenceDetailsComponent implements OnInit {
  myForm: FormGroup; 
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      references: this.fb.array([])
    })
  
  }
  
  get referenceDetails() {
    return this.myForm.get('references') as FormArray
  }
  
  add() {
    const phone = this.fb.group({ 
      name: ['', Validators.required],
      referenceName: ['', Validators.required],
      mobileNo: ['', Validators.required],
    })
  
    this.referenceDetails.push(phone);
  }
  
  delete(i: number) {
    this.referenceDetails.removeAt(i)
  }
}
