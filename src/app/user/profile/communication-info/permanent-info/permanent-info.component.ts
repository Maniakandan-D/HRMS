import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'permanent-info',
  templateUrl: './permanent-info.component.html',
  styleUrls: ['./permanent-info.component.scss']
})
export class PermanentInfoComponent implements OnInit {
  disableSelect = new FormControl(false);
  constructor() { }

  ngOnInit(): void {
  }

}
