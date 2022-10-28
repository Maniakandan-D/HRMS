import { Component, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/user/shared/file-upload.service';

@Component({
  selector: 'image-info',
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.scss']
})
export class ImageInfoComponent implements OnInit {

  // imgsrc = 'https://www.w3schools.com/howto/img_avatar.png';

  // constructor(public _d: DomSanitizer) { }
  // ngOnInit(): void {
  // }

  // fileChange(e: { srcElement: { files: any[]; }; }): void {
  //   const file = e.srcElement.files[0];
  //   this.imgsrc = window.URL.createObjectURL(file);
  // }

  // url: any;
  // msg = "";
  // ngOnInit(): void {
  //  }

  // selectFile(event: any) {
  // 	if(!event.target.files[0] || event.target.files[0].length == 0) {
  // 		this.msg = 'You must select an image';
  // 		return;
  // 	}

  // 	var mimeType = event.target.files[0].type;

  // 	if (mimeType.match(/image\/*/) == null) {
  // 		this.msg = "Only images are supported";
  // 		return;
  // 	}

  // 	var reader = new FileReader();
  // 	reader.readAsDataURL(event.target.files[0]);

  // 	reader.onload = (_event) => {
  // 		this.msg = "";
  // 		this.url = reader.result; 
  // 	}
  // }


  // title = "resumable-upload-file";

  // selectedFile; //Resumable File Upload Variable
  // name; //Resumable File Upload Variable
  // uploadPercent; //Resumable File Upload Variable
  // color = "primary"; //Mat Spinner Variable (Resumable)
  // mode = "determinate"; //Mat Spinner Variable (Resumable)
  // value = 50.25890809809; //Mat Spinner Variable (Resumable)

  // constructor(private http: HttpClient, private form: FormBuilder) { }
  // ngOnInit() { }

  // /* Code For Resumable File Upload Start*/
  // goToLink(url: string) {
  //   window.open(url, "_blank");
  // }

  // onFileSelect(event) {
  //   this.selectedFile = event.target.files[0]; //User selected File
  //   this.name = this.selectedFile.name;
  //   console.log(this.selectedFile);
  // }

  // resumableUpload() {
  //   //checks file id exists or not, checks on name and last modified
  //   let fileId = `${this.selectedFile.name}-${this.selectedFile.lastModified}`;
  //   let headers = new HttpHeaders({
  //     size: this.selectedFile.size.toString(),
  //     "x-file-id": fileId,
  //     name: this.name
  //   });

  //   //To know whether file exist or not before making upload
  //   this.http
  //     .get("http://localhost:3000/status", { headers: headers })
  //     .subscribe((res: any) => {
  //       console.log(JSON.stringify(res));
  //       if (res.status === "file is present") {
  //         alert("File already exists. Please choose a different file.");
  //         return;
  //       }
  //       let uploadedBytes = res.uploaded; //GET response how much file is uploaded
  //       let headers2 = new HttpHeaders({
  //         size: this.selectedFile.size.toString(),
  //         "x-file-id": fileId,
  //         "x-start-byte": uploadedBytes.toString(),
  //         name: this.name
  //       });
  //       // Useful for showing animation of Mat Spinner
  //       const req = new HttpRequest(
  //         "POST",
  //         "http://localhost:3000/upload",
  //         this.selectedFile.slice(uploadedBytes, this.selectedFile.size + 1),
  //         {
  //           headers: headers2,
  //           reportProgress: true //continously fetch data from server of how much file is uploaded
  //         }
  //       );
  //       this.http.request(req).subscribe(
  //         (res: any) => {
  //           if (res.type === HttpEventType.UploadProgress) {
  //             this.uploadPercent = Math.round((100 * res.loaded) / res.total);
  //             console.log(this.uploadPercent);
  //             if (this.uploadPercent >= 100) {
  //               this.name = "";
  //               this.selectedFile = null;
  //             }
  //           } else {
  //             console.log(JSON.stringify(res));
  //             if (this.uploadPercent >= 100) {
  //               this.name = "";
  //               this.selectedFile = null;
  //             }
  //           }
  //         },
  //         err => { }
  //       );
  //     });
  // }
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService) { }
  ngOnInit() { 
    this.imageInfos = this.uploadService.getFiles();
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
  
    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.imageInfos = this.uploadService.getFiles();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        });
    }
  }

  uploadFiles(): void {
    this.message = [];
  
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }
}
