import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserProfileService } from '../../../shared/user-profile.service';
import { GuardianType, UserBasicInfo } from '../../../shared/user-profile.model'; 

@Component({
  selector: 'primary-info',
  templateUrl: './primary-info.component.html',
})
export class PrimaryInfoComponent implements OnInit {

  //@Input()
  basicInfo: UserBasicInfo;
  guardianTypes: (string | GuardianType)[];
  GuardianType: GuardianType;
  basicInfoFormGroup: FormGroup;
  aadharFile: File;
  PANFile: File;
  PassportFile: File;


  constructor(private _formBuilder: FormBuilder, private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.guardianTypes = Object.values(GuardianType).filter(value => typeof value === 'string');

    this.basicInfoFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      nameAadhar: ['', [Validators.required]],
      AadharNo: ['', [Validators.required]],
      Fathername: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      PANnumber: ['', [Validators.required]],
      guardianType: ['', [Validators.required]],
    }, { updateOn: 'submit' });


    //basicinfo read as input from component
    this.basicInfoFormGroup.patchValue(this.basicInfo);
  }

  onSelectAadharFile(event: Event): void {
    this.aadharFile = this.getInputFile(event);
  }

  onSelectPANFile(event: Event): void {
    this.PANFile = this.getInputFile(event);
  }
  
  onSelectPassportFile(event: Event){
    this.PassportFile = this.getInputFile(event);
  }

  getInputFile(event: Event): File {
    const element = event.currentTarget /* event.target */ as HTMLInputElement;
    let file: File | null = element.files[0];
    return file;
  }

  onSubmit(): void {
    this.userProfileService.saveUserBasicInfo(this.basicInfo);
  }
}
