import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Educational } from './table.model';

@Injectable({
  providedIn: 'root'
})

export class EducationalService {
    apiEndpoint: string = environment.API;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Educational[]> {
    return this.http.get<Educational[]>(`${this.apiEndpoint}/Educational`);
}

add(educational: Educational): Observable<Educational> {
    return this.http.post<Educational>(`${this.apiEndpoint}/Educational`, educational);
  }
delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiEndpoint}/Educational/${id}`).pipe(map((res: any) => {
        return res
    }));
}

update(educational: Educational): Observable<Educational> {
    return this.http.put<Educational>(`${this.apiEndpoint}/Educational/${educational.id}`, educational);
}
}