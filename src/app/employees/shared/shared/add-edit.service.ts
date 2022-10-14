import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FamilyDetails } from './add-edit.model';
import { RelationshipName } from './add-edit.model';

@Injectable({
  providedIn: 'root'
})
export class AddEditService {
  apiEndpoint: string  = environment.BackendApiEndpointFamilyDetails;
  apiEndpointName: string  = environment.BackendApiEndpointRelationshipName;

  constructor(private http: HttpClient) { }

  getAll(): Observable<FamilyDetails[]> {
    return this.http.get<FamilyDetails[]>(`${this.apiEndpoint}`);
  }

  add(familyDetails: FamilyDetails): Observable<FamilyDetails> {
    return this.http.post<FamilyDetails>(`${this.apiEndpoint}`, familyDetails);
  }

  update(familyDetails: FamilyDetails): any{
    return this.http.put(`${this.apiEndpoint}/${familyDetails.id}`, familyDetails);
  }

  delete(id:string): Observable<FamilyDetails>{
    return this.http.delete<FamilyDetails>(`${this.apiEndpoint}/${id}`).pipe(map((res: any ) =>{
    return res
    }));
  }
  getRelationship(): Observable<RelationshipName[]> {
    return this.http.get<RelationshipName[]>(`${this.apiEndpointName}`);
  }

}
