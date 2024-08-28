import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Entity } from '../model/Entity';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient,private router: Router) {}

  logout()
  {
    localStorage.removeItem('authToken');
    this.router.navigate(['']);

  }

  loginUser(entity:Entity):Observable<any>  //loginUser(form:FormGroup)
  {
    return this.http.post<any>('/api/auth/login',entity);
  }

  regUser(user:User)
  {
    return this.http.post('/api/auth/register',user,{responseType:"text"});
  }

  getUser(id:number)
  {
    return this.http.get<User>("/api/UserAdditionalInfo/"+id);
  }

 
  public showInfoUser:boolean = false;

}
