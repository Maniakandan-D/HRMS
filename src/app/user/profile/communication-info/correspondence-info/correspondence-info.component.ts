import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Communication } from 'src/app/employees/shared/employee.model';

@Component({
  selector: 'correspondence-info',
  templateUrl: './correspondence-info.component.html',
  styleUrls: ['./correspondence-info.component.scss']
})
export class CorrespondenceInfoComponent implements OnInit {

  @Input()
  communication: Communication;

  @Output()
  formReady = new EventEmitter<FormGroup>();

  @Output()
  valueChange = new EventEmitter<Partial<Communication>>();

  correspondenceForm: FormGroup;

  private subscription = new Subscription();

  constructor(private fb: FormBuilder) { }

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
    }, { updateOn: 'submit' });

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
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
