import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EducationalService } from '../../shared/educational.service';
import { Educational, EducationalColumns } from '../../shared/table.model';

@Component({
  selector: 'education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.scss']
})
export class EducationInfoComponent implements OnInit {

  displayedColumns: string[] = EducationalColumns.map((col) => col.key);
  columnsSchema: any = EducationalColumns;
  dataSource = new MatTableDataSource<Educational>();
  valid: any = {};

  constructor(private educationalService: EducationalService) { }

  ngOnInit() {
    this.educationalService.getAll().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  editRow(row: Educational) {
    if (row.id === '') {
      this.educationalService.add(row).subscribe((newUser: Educational) => {
        row.id = newUser.id;
        row.isEdit = false;
      });
    } else {
      this.educationalService.update(row).subscribe(() => (row.isEdit = false));
    }
  }

  addRow() {
    const newRow: Educational = {
      id: '',
      university: '',
      completionYear: '',
      program: '',
      aggregate: '',
      grade: '',
      isEdit: true,
    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id: string) {
    this.educationalService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (educational: Educational) => educational.id !== id
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
