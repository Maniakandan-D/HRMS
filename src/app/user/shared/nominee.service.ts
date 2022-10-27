import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Nominee } from './table.model';


@Injectable({
    providedIn: 'root'
})

export class NomineeService {
    apiEndpoint: string = environment.API;
    constructor(private http: HttpClient) { }

    getAll(): Observable<Nominee[]> {
        return this.http.get<Nominee[]>(`${this.apiEndpoint}/Nominee`);
    }

    add(nominee: Nominee): Observable<Nominee> {
        return this.http.post<Nominee>(`${this.apiEndpoint}/Nominee`, nominee);
      }
    delete(id: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.apiEndpoint}/Nominee/${id}`).pipe(map((res: any) => {
            return res
        }));
    }

    update(nominee: Nominee): Observable<Nominee> {
        return this.http.put<Nominee>(`${this.apiEndpoint}/Nominee/${nominee.id}`, nominee);
    }
}