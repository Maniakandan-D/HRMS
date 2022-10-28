import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Dependent } from './table.model';


@Injectable({
    providedIn: 'root'
})

export class DependentService {

    apiEndpoint: string = environment.API;

    constructor(private http: HttpClient) { }
    getAll(): Observable<Dependent[]> {
        return this.http.get<Dependent[]>(`${this.apiEndpoint}/Dependent`);
    }

    add(dependent: Dependent): Observable<Dependent> {
        return this.http.post<Dependent>(`${this.apiEndpoint}/Dependent`, dependent);
    }

    delete(id: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.apiEndpoint}/Dependent/${id}`).pipe(map((res: any) => {
            return res
        }));
    }

    update(dependent: Dependent): Observable<Dependent> {
        return this.http.put<Dependent>(`${this.apiEndpoint}/dependent/${dependent.id}`, dependent);
    }


}