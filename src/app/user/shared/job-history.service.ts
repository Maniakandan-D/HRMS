import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobHistory } from './job-history.model';

@Injectable({
    providedIn: 'root'
  })

  export class JobHistoryService {
    base_url = "http://localhost:3000/JobHistory";
    constructor(private http: HttpClient) { }


  }