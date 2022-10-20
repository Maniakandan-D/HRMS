import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../password-validator';
import { UserService } from 'src/app/user/shared/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user/shared/user.model';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  form: FormGroup;
  MOBILE_PATTERN = /[0-9\+\-\ ]/;
  constructor(private formBuilder: FormBuilder,
    private userService:UserService,
    private http:UserService,
    private router: Router) { }
    
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName:['',Validators.required],
      email:[{value:'aprilcox@newcube.com',disabled:true}],
      password: ['',[
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ]],
      PhoneNumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });


  }

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  register(): void{
    this.http.registerUser(this.form.value)
    .subscribe({
      next: res => {
      alert("Register successfully!!");
      this.form.reset();
      this.router.navigate(['login']);
    },
    error: error => {
      alert("something went wrong during Register")
    }
  });
  }

}
