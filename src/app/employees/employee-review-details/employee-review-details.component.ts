import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee-review-details',
  templateUrl: './employee-review-details.component.html',
  styleUrls: ['./employee-review-details.component.scss']
})
export class EmployeeReviewDetailsComponent implements OnInit {

   
  familyRefForm: FormGroup;
   
  constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.familyRefForm = this.fb.group({
      familyDetail: this.fb.array([]) ,
    });
  }
  
  familyDetails() : FormArray {
    return this.familyRefForm.get("familyDetail") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      name: '',
      relationship: '',
      dob: '',
    })
  }
   
  add() {
    this.familyDetails().push(this.newQuantity());
  }
   
  remove(i:number) {
    this.familyDetails().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.familyRefForm.value);
  }

}
