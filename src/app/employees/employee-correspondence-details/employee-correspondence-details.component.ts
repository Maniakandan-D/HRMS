import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-correspondence-details',
  templateUrl: './employee-correspondence-details.component.html',
  styleUrls: ['./employee-correspondence-details.component.scss']
})
export class EmployeeCorrespondenceDetailsComponent implements OnInit {
  @Input()
  employee: Employee;

  @Output()
  formReady = new EventEmitter<FormGroup>();

  @Output()
  valueChange = new EventEmitter<Partial<Employee>>();

  correspondenceForm: FormGroup;

  private subscription = new Subscription();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.correspondenceForm = this.fb.group({
      email: [this.employee.email, [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobilePhone: [this.employee.mobilePhone, [Validators.required]],
      streetAddress: [this.employee.streetAddress, [Validators.required]],
      apartmentUnit: [this.employee.apartmentUnit, [Validators.required]],
      city: [this.employee.city, [Validators.required]],
      state: [this.employee.state, [Validators.required]],
      pincode: [this.employee.pincode, [Validators.required]],
    }, {updateOn:'submit'});

    this.subscription.add(
      this.correspondenceForm.valueChanges.subscribe((value) => {
        this.valueChange.emit({
          streetAddress: value.email,
        });
      })
    );

    this.formReady.emit(this.correspondenceForm);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
