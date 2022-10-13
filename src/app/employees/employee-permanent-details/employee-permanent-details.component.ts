import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { Employee } from '../shared/employee.model';

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || isSubmitted) //|| control.touched 
    );
  }
}


@Component({
  selector: 'app-employee-permanent-details',
  templateUrl: './employee-permanent-details.component.html',
  styleUrls: ['./employee-permanent-details.component.scss']
})
export class EmployeePermanentDetailsComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  @Input()
  employee: Employee;

  permanentForm: FormGroup;

  @Output()
  formReady = new EventEmitter<FormGroup>();

  @Output()
  valueChange = new EventEmitter<Partial<Employee>>();

  private subscription = new Subscription();
 
  get email() { return this.permanentForm.get('email'); }
  get mobilePhone() { return this.permanentForm.get('mobilePhone'); }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.permanentForm = this.fb.group({
      email: [this.employee.email, [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobilePhone: [this.employee.mobilePhone, [Validators.required]],
    }, { updateOn: 'submit' });
    
    this.subscription.add(
      this.permanentForm.valueChanges.subscribe((value) => {
        this.valueChange.emit({
          email: value.email,
        });
      })
    );

    this.formReady.emit(this.permanentForm);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  disableSelect = new FormControl(false);
}
