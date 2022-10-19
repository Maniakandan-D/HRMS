import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postUser(data:any){
    return this.http.post("http://localhost:3000/users/",data);
  }

  getUser(){
    return this.http.get<user>("http://localhost:3000/users");
  }

  activateUser(data:any,id:any){
    return this.http.put(`http://localhost:3000/Users/${id}`,data);
  }

  deleteUserService(id:string){
    return this.http.delete<user>(`http://localhost:3000/Users/${id}`);
  }

  editUserService(data:any,id:any){
    return this.http.put(`http://localhost:3000/Users/${id}`,data);
  }

  getUserById(id: string){
    return this.http.get(`http://localhost:3000/Users/${id}`);
  }
}
