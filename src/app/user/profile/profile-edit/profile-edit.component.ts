import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BasicInfo } from '../../shared/table.model';
import { UserProfileService } from '../../shared/user-profile.service';


@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  basicInfo: BasicInfo;
  basicInfoFormGroup: FormGroup;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }


  onSubmit() {

  }
}
