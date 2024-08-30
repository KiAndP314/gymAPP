import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getUser(id:number):Observable<User>
  {
    let headers = new HttpHeaders({Authorization: 'Bearer '+ localStorage.getItem("authToken")})
    return this.http.get<User>("/api/UserAdditionalInfo/"+id, {headers});
  }

 
  public showInfoUser:boolean = false;

}
