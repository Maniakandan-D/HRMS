// http-data.servie.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  FamilyDetails, FamilyDetailsVM} from './familyDetails.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FamilyDetailsService {


  // API path
  base_path = 'http://localhost:3000/FamilyDetails';

  base_pathRelation = 'http://localhost:3000/Relationship';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Create a new item
  create(FamilyDetail: any): Observable<FamilyDetails> {
    return this.http
      .post<FamilyDetails>(this.base_path, JSON.stringify(FamilyDetail), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
// Get single FamilyDetails data by ID
  get(id: string): Observable<FamilyDetails> {
    return this.http
      .get<FamilyDetails>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get FamilyDetails data
  getList(): Observable<FamilyDetails> {
    return this.http
      .get<FamilyDetails>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update  by id
  update(id: number, FamilyDetail: any): Observable<FamilyDetails> {
    return this.http
      .put<FamilyDetails>(this.base_path + '/' + id, JSON.stringify(FamilyDetail), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(id: string) {
    return this.http
      .delete<FamilyDetails>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
   // Get getRelationship data
   getRelationship(): Observable<FamilyDetailsVM> {
    return this.http
      .get<FamilyDetailsVM>(this.base_pathRelation)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
  
