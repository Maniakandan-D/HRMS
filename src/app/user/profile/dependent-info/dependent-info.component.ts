import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DependentService } from '../../shared/dependent.service';
import { Dependent, DependentColumns } from '../../shared/table.model';

@Component({
  selector: 'dependent-info',
  templateUrl: './dependent-info.component.html',
  styleUrls: ['./dependent-info.component.scss']
})
export class DependentInfoComponent implements OnInit {

  displayedColumns: string[] = DependentColumns.map((col) => col.key);
  columnsSchema: any = DependentColumns;
  dataSource = new MatTableDataSource<Dependent>();
  valid: any = {};

  constructor(private dependentService: DependentService) { }

  ngOnInit() {
    this.dependentService.getAll().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  editRow(row: Dependent) {
    if (row.id === '') {
      this.dependentService.add(row).subscribe((newUser: Dependent) => {
        row.id = newUser.id;
        row.isEdit = false;
      });
    } else {
      this.dependentService.update(row).subscribe(() => (row.isEdit = false));
    }
  }

  addRow() {
    const newRow: Dependent = {
      id: '',
      dependentName: '',
      name: '',
      dob: '',
      gender: '',
      isEdit: true,
    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id: string) {
    this.dependentService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (dependent: Dependent) => dependent.id !== id
      );
    });
  }



  inputHandler(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {};
    }
    this.valid[id][key] = e.target.validity.valid;
  }

  disableSubmit(id: number) {
    if (this.valid[id]) {
      return Object.values(this.valid[id]).some((item) => item === false);
    }
    return false;
  }
}
