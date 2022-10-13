import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Employee } from '../../shared/employee.model';
import { EmployeeService } from '../../shared/employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmployeeDetailsComponent implements OnInit {
  employee : Employee;
  employeeForm : FormGroup =this._formBuilder.group({});
  isLinear = true;
  isSubmitted: boolean;
  constructor(private _formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  PersonalForm : FormGroup =this._formBuilder.group({});
  
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  ngOnInit(): void {
    this.employeeService.fetchEmployee().subscribe((employee) => {
      this.employee = employee;
    });
  }
  addChildForm(name: string, group: FormGroup) {
    this.employeeForm.addControl(name, group);
  }
  onValueChange(changes: Partial<Employee>) {
    this.employee = { ...this.employee, ...changes };
  }

  onSubmit(): void{
    // this.isSubmitted = true;
    // if(!this.employeeForm.valid) {
    //   return;
    // }
    
    this.employeeService.saveEmployee(this.employee).subscribe(() => {
      this.employeeForm.enable();
      // this.employeeForm.reset();
    });
  }
}

