import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { TableDataSource, ValidatorService } from 'angular4-material-table';

import { PersonValidatorService } from '../shared/person-validator.service'; 
import { Person } from '../shared/person';

@Component({
  selector: 'app-employee-add-edit',
  providers: [
    {provide: ValidatorService, useClass: PersonValidatorService }
  ],
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss']
})
export class EmployeeAddEditComponent implements OnInit {

  constructor(private personValidator: ValidatorService) { }

  displayedColumns = ['name', 'age', 'actionsColumn'];

  @Input() personList = [ 
    { name: 'Mark', age: 15 },
    { name: 'Brad', age: 50 },
    ] ;
  @Output() personListChange = new EventEmitter<Person[]>();

  dataSource: TableDataSource<Person>;


  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Person, this.personValidator);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }
}
