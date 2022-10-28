import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  form1 = new FormGroup({});
  
  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      company: [''],
      address: [''],
      userArray: new FormArray([])
    });
  }

  get userArray() {
    return (<FormArray>this.form1.get('userArray'));
  }

  addUser() {
    this.userArray.push(this.getUserForm());
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  onSubmit() {
    console.log(this.form1.value);
  }
  getUserForm() {
    return this.fb.group({
      name: [''],
      gender: ['']
    });
  }
}
