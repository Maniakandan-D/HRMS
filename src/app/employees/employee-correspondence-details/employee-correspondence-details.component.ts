import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Communication, Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-correspondence-details',
  templateUrl: './employee-correspondence-details.component.html',
  styleUrls: ['./employee-correspondence-details.component.scss']
})
export class EmployeeCorrespondenceDetailsComponent implements OnInit {
  @Input()
  mode: any
  @Input()
  names: any
  @Input()
  url: any
  @Input()
  method: any
  @Input()
  multiple: boolean
  @Input()
  disabled: any
  @Input()
  accept: any
  @Input()
  maxFileSize: any
  @Input()
  auto = true
  @Input()
  withCredentials: any
  @Input()
  invalidFileSizeMessageSummary: any
  @Input()
  invalidFileSizeMessageDetail: any
  @Input()
  invalidFileTypeMessageSummary: any
  @Input()
  invalidFileTypeMessageDetail: any
  @Input()
  previewWidth: any
  @Input()
  chooseLabel = 'Choose'
  @Input()
  uploadLabel = 'Upload'
  @Input()
  cancelLabel = 'Cance'
  @Input()
  customUpload: any
  @Input()
  showUploadButton: any
  @Input()
  showCancelButton: any


  @Input()
  dataUriPrefix: any
  @Input()
  deleteButtonLabel: any
  @Input()
  deleteButtonIcon = 'close'
  @Input()
  showUploadInfo: any

  /**
   *
   */


  @ViewChild('fileUpload')
  fileUpload: ElementRef

  inputFileName: string

  @Input()
  files: File[] = []
  
  @Input()
  communication: Communication;

  @Output()
  formReady = new EventEmitter<FormGroup>();

  @Output()
  valueChange = new EventEmitter<Partial<Communication>>();

  correspondenceForm: FormGroup;

  private subscription = new Subscription();

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.correspondenceForm = this.fb.group({
      email: [this.communication.email, [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobilePhone: [this.communication.mobilePhone, [Validators.required]],
      streetAddress: [this.communication.streetAddress, [Validators.required]],
      apartmentUnit: [this.communication.apartmentUnit, [Validators.required]],
      city: [this.communication.city, [Validators.required]],
      state: [this.communication.state, [Validators.required]],
      pincode: [this.communication.pincode, [Validators.required]],
    }, {updateOn:'submit'});

    this.subscription.add(
      this.correspondenceForm.valueChanges.subscribe((value) => {
        this.valueChange.emit({
          email: value.email,
          mobilePhone: value.mobilePhone,
          streetAddress: value.streetAddress,
          apartmentUnit: value.apartmentUnit,
          city: value.city,
          state: value.state,
          pincode: value.pincode,
        });
      })
    );

    this.formReady.emit(this.correspondenceForm);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
//file
  onClick(event: any) {
    if (this.fileUpload)
      this.fileUpload.nativeElement.click()
  }

  onInput(event: any) {

  }

  onFileSelected(event: { dataTransfer: { files: any; }; target: { files: any; }; }) {
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    console.log('event::::::', event)
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      //if(!this.isFileSelected(file)){
      if (this.validate(file)) {
        //      if(this.isImage(file)) {
        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
        //      }
        if (!this.isMultiple()) {
          this.files = []
        }
        this.files.push(files[i]);
        //  }
      }
      //}
    }
  }

  removeFile(event: any, file: File) {
    let ix: number
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1)
      this.clearInputElement()
    }
  }

  validate(file: File) {
    for (const f of this.files) {
      if (f.name === file.name
        && f.lastModified === file.lastModified
        && f.size === f.size
        && f.type === f.type
      ) {
        return false
      }
    }
    return true
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = ''
  }


  isMultiple(): boolean {
    return this.multiple
  }
}


