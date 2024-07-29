import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Entity } from '../model/Entity';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) {}

  loginUser(entity:Entity):Observable<any> 
  {
    return this.http.post<any>('/api/auth/login',entity);
  }

  regUser(user:User):Observable<User>
  {
    return this.http.post<User>('/api/auth/register',user);
  }

  logout()
  {
    localStorage.removeItem('authToken');
  }

 
  public showInfoUser:boolean = false;

  id: number=0;
  user:User = {id:0,email:"",name:"",surname:"",gym:"",dob:new Date,courses:[],password:""};
}
