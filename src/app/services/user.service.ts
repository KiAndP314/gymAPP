import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Entity } from '../model/Entity';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;


  constructor(private http:HttpClient,  private router: Router) {}

  logout()
  {
    localStorage.removeItem('authToken');
    this.router.navigate(['']);

  }

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
