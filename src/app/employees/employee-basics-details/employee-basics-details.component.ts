import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Employee} from '../shared/employee.model';


@Component({
  selector: 'app-employee-basics-details',
  templateUrl: './employee-basics-details.component.html',
  styleUrls: ['./employee-basics-details.component.scss']
})
export class EmployeeBasicsDetailsComponent implements OnInit {
  // @Input()
  // requiredFileType:string;

  // fileName = '';
  // uploadProgress:number;
  // uploadSub: Subscription;

 
  @Input()
  employee: Employee;
  

  @Output()
  valueChange = new EventEmitter<Partial<Employee>>();

  @Output()
  formReady = new EventEmitter<FormGroup>();

  basicForm: FormGroup;

  private subscription = new Subscription();
  selectedFiles: any;
  aadharFiles: any;
  
  get firstName() { return this.basicForm.get('firstName'); }
  get lastName() { return this.basicForm.get('lastName'); }
  get nameAadhar() { return this.basicForm.get('nameAadhar'); }
  get AadharNo() { return this.basicForm.get('AadharNo'); }

  get Fathername() { return this.basicForm.get('Fathername'); }
  get bithday() { return this.basicForm.get('bithday'); }
  get PANno() { return this.basicForm.get('PANno'); }

  
  constructor(private fb: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.basicForm = this.fb.group({
      firstName:  [this.employee.firstName, [Validators.required]],
      lastName: [this.employee.lastName, [Validators.required]],
      nameAadhar: [this.employee.nameAadhar, [Validators.required]],
      AadharNo: [this.employee.AadharNo, [Validators.required]],
      Fathername: [this.employee.Fathername, [Validators.required]],
      bithday: [this.employee.bithday, [Validators.required]],
      PANno: [this.employee.PANno, [Validators.required]],
    }, { updateOn: 'submit' });

    this.subscription.add(
      this.basicForm.valueChanges.subscribe((value) => {
        this.valueChange.emit({
          firstName: value.firstName,
          lastName: value.lastName,
          nameAadhar:  value.nameAadhar,
          Fathername: value.Fathername,
          bithday: value.bithday,
        });
      })
    );

    this.formReady.emit(this.basicForm);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  aadharFile(event: { target: { files: any; }; }) {
    this.aadharFiles = event.target.files;
  }
  
  selectFile(event: { target: { files: any; }; }) {
    this.selectedFiles = event.target.files;
  }


  // onFileSelected(event: { target: { files: File[]; }; }) {
  //   const file:File = event.target.files[0];
  
  //   if (file) {
  //       this.fileName = file.name;
  //       const formData = new FormData();
  //       formData.append("thumbnail", file);

  //       const upload$ = this.http.post("/api/thumbnail-upload", formData, {
  //           reportProgress: true,
  //           observe: 'events'
  //       })
  //       .pipe(
  //           finalize(() => this.reset())
  //       );
      
  //       this.uploadSub = upload$.subscribe(event => {
  //         if (event.type == HttpEventType.UploadProgress) {
  //           this.uploadProgress = Math.round(100 * (event.loaded / event.total));
  //         }
  //       })
  //   }
  // }
  //   cancelUpload() {
  //     this.uploadSub.unsubscribe();
  //     this.reset();
  //   }

  //   reset() {
  //     this.uploadProgress = null;
  //     this.uploadSub = null;
  //   }
}
