import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //GET: api/v1/user/profile
  //GET: api/v1/user/profile/id

  apiEndpoint: string = environment.API;

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiEndpoint}`);
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiEndpoint}`);
  }

  inviteUsers(users: User[]): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiEndpoint}`, users);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiEndpoint}`, user);
  }

  deleteUser(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiEndpoint}/${id}`).pipe(map((res: any) => {
      return res
    }));
  }
}
