import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserProfileService } from '../../../shared/user-profile.service';
import { GuardianType } from '../../../shared/user-profile.model';
import { BasicInfo } from 'src/app/user/shared/table.model';

@Component({
  selector: 'primary-info',
  templateUrl: './primary-info.component.html',
  styleUrls: ['primary-info.component.scss']
})
export class PrimaryInfoComponent implements OnInit {
  submitted: boolean;
  basicInfo: BasicInfo = new BasicInfo();
  //@Input()
  guardianTypes: (string | GuardianType)[];
  GuardianType: GuardianType;
  basicInfoFormGroup: FormGroup;
  aadhaarFile: File;
  PANFile: File;
  PassportFile: File;


  constructor(private _formBuilder: FormBuilder, private userProfileService: UserProfileService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.guardianTypes = Object.values(GuardianType).filter(value => typeof value === 'string');
    this.basicInfoFormGroup = this._formBuilder.group({
      file: [null],
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      profileImageFile: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      aadhaarName: ['', [Validators.required]],
      aadhaarNumber: [''],
      aadhaarFile: [''],
      panNumber: [''],
      panFile: [''],
      nationality: [''],
      passportNumber: [''],
      validVisaInformation: [''],
      guardianType: ['', [Validators.required]],
      guardianName: ['', [Validators.required]],
    }, { updateOn: 'submit' });

    //basicinfo read as input from component
    this.basicInfoFormGroup.patchValue(this.basicInfo);
  }

  onSelectAadhaarFile(event: Event): void {
    this.aadhaarFile = this.getInputFile(event);
  }

  onSelectPANFile(event: Event): void {
    this.PANFile = this.getInputFile(event);
  }

  onSelectPassportFile(event: Event) {
    this.PassportFile = this.getInputFile(event);
  }

  getInputFile(event: Event): File {
    const element = event.currentTarget /* event.target */ as HTMLInputElement;
    let file: File | null = element.files[0];
    return file;
  }

  submit(): boolean {
    this.userProfileService.saveUserBasicInfo(this.basicInfo);
    this.submitted = true;
    if (!this.basicInfoFormGroup.valid) {
      alert('Please fill all the required fields to create a super hero!')
      return false;
    } else {
      console.log(this.basicInfoFormGroup.value)
    }
  }
  


  //File Upload

  // registrationForm = this._formBuilder.group({
  //   file: [null]
  // })

  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://www.w3schools.com/howto/img_avatar.png';
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
        this.basicInfoFormGroup.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }

      this.cd.markForCheck();
    }
  }


  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.basicInfoFormGroup.patchValue({
      file: [null]
    });
  }


  // onSubmit() {
  //   this.submitted = true;
  //   if (!this.basicInfoFormGroup.valid) {
  //     alert('Please fill all the required fields to create a super hero!')
  //     return false;
  //   } else {
  //     console.log(this.basicInfoFormGroup.value)
  //   }
  // }
}
