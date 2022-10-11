import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  apiEndpoint: string  = environment.BackendApiEndpointSignup;
  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',[ Validators.required, Validators.minLength(4)]],
      mobileNo: ['', [ Validators.required, Validators.minLength(10)]],
      email:['',[ Validators.required, Validators.email]],
      password:['', [ Validators.required, Validators.minLength(8)]],
    });
  }
  signup(): void{
    this.http.post<any>(`${this.apiEndpoint}`, this.signupForm.value)
    .subscribe({
      next: res => {
      alert("Signup successfully!!");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },
    error: error => {
      alert("something went wrong during signup")
    }
  });
  }
}
