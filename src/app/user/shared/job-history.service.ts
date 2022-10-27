import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JobHistory } from './table.model';

@Injectable({
  providedIn: 'root'
})

export class JobHistoryService {
  apiEndpoint: string = environment.API;
  constructor(private http: HttpClient) { }
  
  getAll(): Observable<JobHistory[]> {
    return this.http.get<JobHistory[]>(`${this.apiEndpoint}/JobHistory`);
  }

  add(jobHistory: JobHistory): Observable<JobHistory> {
    return this.http.post<JobHistory>(`${this.apiEndpoint}/JobHistory`, jobHistory);
  }
  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiEndpoint}/JobHistory/${id}`).pipe(map((res: any) => {
      return res
    }));
  }

  update(jobHistory: JobHistory): Observable<JobHistory> {
    return this.http.put<JobHistory>(`${this.apiEndpoint}/JobHistory/${jobHistory.id}`, jobHistory);
  }

}