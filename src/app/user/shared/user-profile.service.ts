import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserBasicInfo, UserContactInfo, UserProfile } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  //GET: api/v1/user/profile
  //GET: api/v1/user/profile/id

  apiEndpoint: string = environment.API;

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(`${this.apiEndpoint}`);
  }

  getById(id: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiEndpoint}`);
  }

  saveUserBasicInfo(basicInfo: UserBasicInfo): Observable<UserBasicInfo> {
    return this.http.post<UserBasicInfo>(`${this.apiEndpoint}`, basicInfo);
  }

  saveUserContactInfo(contactInfo: UserContactInfo): Observable<UserContactInfo> {
    return this.http.post<UserContactInfo>(`${this.apiEndpoint}`, contactInfo);
  }
}
