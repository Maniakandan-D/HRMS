import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../password-validator';
import { UserService } from '../../users/shared/user.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService:UserService) { }
    
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName:['',Validators.required],
      email:[{value:'aprilcox@newcube.com',disabled:true}],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });


  }

  onSubmit(){
    alert("Password set successfully");
    console.log("Password="+this.form.value.password);
    
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }


}
