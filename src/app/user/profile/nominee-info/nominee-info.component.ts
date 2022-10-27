import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NomineeService } from '../../shared/nominee.service';
import { Nominee, NomineeColumns } from '../../shared/table.model';



@Component({
  selector: 'nominee-info',
  templateUrl: './nominee-info.component.html',
  styleUrls: ['./nominee-info.component.scss']
})
export class NomineeInfoComponent implements OnInit {

  displayedColumns: string[] = NomineeColumns.map((col) => col.key);
  columnsSchema: any = NomineeColumns;
  dataSource = new MatTableDataSource<Nominee>();
  valid: any = {};

  constructor(private nomineeService: NomineeService) { }

  ngOnInit() {
    this.nomineeService.getAll().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  editRow(row: Nominee) {
    if (row.id === '') {
      this.nomineeService.add(row).subscribe((newUser: Nominee) => {
        row.id = newUser.id;
        row.isEdit = false;
      });
    } else {
      this.nomineeService.update(row).subscribe(() => (row.isEdit = false));
    }
  }

  addRow() {
    const newRow: Nominee = {
      id: '',
      relationship: '',
      nomineeName: '',
      dob: '',
      gender: '',
      nomineeShare: '',
      isEdit: true,
    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id: string) {
    this.nomineeService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (nominee: Nominee) => nominee.id !== id
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
