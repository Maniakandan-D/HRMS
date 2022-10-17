import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-image-details',
  templateUrl: './employee-image-details.component.html',
  styleUrls: ['./employee-image-details.component.scss']
})
export class EmployeeImageDetailsComponent implements OnInit {
  imageSrc: string;
  url:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  addForm = new FormGroup({
    image: new FormControl('', Validators.required),
    imageSrc: new FormControl('', Validators.required)
    });
      
    get f(){
      return this.addForm.controls;
    }
     
    onFileChange(event: { target: { files: string | any[]; }; }) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [image] = event.target.files;
      reader.readAsDataURL(image);
    
      reader.onload = () => {
    
    this.imageSrc = reader.result as string;
    
    this.addForm.patchValue({
      imageSrc: reader.result
    });
    
      };
    
    }
    }
    
    onSubmit(){
    console.log(this.addForm.value);
    this.http.post('http://localhost/codeigniter4_rest_api/student/upload', this.addForm.value)
      .subscribe(res => {
    console.log(res);
    alert('Uploaded Successfully.');
    })
    }

  
}
