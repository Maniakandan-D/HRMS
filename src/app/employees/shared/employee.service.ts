import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor() {}

  fetchEmployee(): Observable<Employee> {
   
    // const employee: Employee = {
    //   firstName: '',
    //   lastName: '',
    //   nameAadhar: '',
    //   Fathername: '',
    //   bithday: '',
    //   streetAddress : '',
    //   apartmentUnit : '',
    //   city : '',
    //   state :'',
    //   pincode : '' ,
    //   email: '',
    //   mobilePhone:'',
    //   spouseName : '',
    //   spouseEmployer : '',
    //   spousePhone : '',
    //   bankName : '',
    //   bankNo : '',
    //   bankAddress :'',
    //   dependents : '',
    //   nominee : '',
    //   maritialStatus:false
    //   };
      const employee: Employee = {
    firstName: 'John',
    lastName: 'Doe',
    nameAadhar: 'John Doe',
    Fathername: 'mark',
    bithday: '10/27/2022',
    streetAddress : '213,abc',
    apartmentUnit : '12',
    city : 'new york',
    state :'new york',
    pincode : '45467' ,
    email: 'mark@gmail.com',
    mobilePhone:'9876767809',
    spouseName : 'string',
    spouseEmployer : 'string',
    spousePhone : '1324324',
    bankName : 'abc Bank',
    bankNo : '12345678',
    bankAddress :'123, xyz',
    dependents : 'string',
    nominee : 'nl',
    maritialStatus:false
    };

    return of(employee).pipe(delay(1000));
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    console.log('Saving employee...', employee);
    return of(employee).pipe(delay(1000));
  }
}
