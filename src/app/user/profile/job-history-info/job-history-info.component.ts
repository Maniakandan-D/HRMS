import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JobHistoryService } from '../../shared/job-history.service';
import { JobHistory, JobHistoryColumns } from '../../shared/table.model';

@Component({
  selector: 'job-history-info',
  templateUrl: './job-history-info.component.html',
  styleUrls: ['./job-history-info.component.scss']
})
export class JobHistoryInfoComponent implements OnInit {

  displayedColumns: string[] = JobHistoryColumns.map((col) => col.key);
  columnsSchema: any = JobHistoryColumns;
  dataSource = new MatTableDataSource<JobHistory>();
  valid: any = {};

  constructor(private jobHistoryService: JobHistoryService) { }

  ngOnInit() {
    this.jobHistoryService.getAll().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  editRow(row: JobHistory) {
    if (row.id === '') {
      this.jobHistoryService.add(row).subscribe((newUser: JobHistory) => {
        row.id = newUser.id;
        row.isEdit = false;
      });
    } else {
      this.jobHistoryService.update(row).subscribe(() => (row.isEdit = false));
    }
  }

  addRow() {
    const newRow: JobHistory = {
      id: '',
      position: '',
      companyName: '',
      address: '',
      numberYears: '',
      period: '',
      ctc: '',
      isEdit: true,
    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id: string) {
    this.jobHistoryService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (jobHistory: JobHistory) => jobHistory.id !== id
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
