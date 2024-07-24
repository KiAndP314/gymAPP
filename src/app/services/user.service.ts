import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Entity } from '../model/Entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private users: User[] =[
  //   {
  //     id: 1,
  //     name: 'John',
  //     surname: 'Doe',
  //     dob: new Date('1990-01-01'),
  //     gym: 'Fitness 24/7',
  //     email: 'john.doe@example.com',
  //     password: "John1",
  //     courses: []
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane',
  //     surname: 'Johnson',
  //     dob: new Date('1992-03-15'),
  //     gym: 'Powerhouse Gym',
  //     email: 'jane.johnson@example.com',
  //     password: "Jane1",
  //     courses: []
  //   },
  //   {
  //     id: 3,
  //     name: 'Bob',
  //     surname: 'Smith',
  //     dob: new Date('1985-06-20'),
  //     gym: 'Gold',
  //     email: 'bob.smith@example.com',
  //     password: "Bob1",
  //     courses: []
  //   },
  //   {
  //     id: 4,
  //     name: 'Alice',
  //     surname: 'Brown',
  //     dob: new Date('1995-09-10'),
  //     gym: 'LA Fitness',
  //     email: 'alice.brown@example.com',
  //     password: "Alice1",
  //     courses: []
  //   },
  //   {
  //     id: 5,
  //     name: 'Mike',
  //     surname: 'Davis',
  //     dob: new Date('1988-02-25'),
  //     gym: 'Anytime Fitness',
  //     email: 'mike.davis@example.com',
  //     password: "Mike1",
  //     courses: []
  //   }
  // ];


  constructor(private http:HttpClient) {}

  loginUser(entity:Entity):Observable<any> 
  {
    return this.http.post<any>('/api/auth/login',entity);
  }


  // getUsers(): Observable<User[]>
  // {
  //   return of(this.users);
  // }

  // getUserById(id: number):  Observable<any> | undefined {
  //   return of(this.users.find(user => user.id === id));

  // }

  // addUser(user: User):Observable<User[]> {
    
  //   return this.http.post<User>('/api/auth/register');
  // }

  public showInfoUser:boolean = false;

  id: number=0;
  user:User = {id:0,email:"",name:"",surname:"",gym:"",dob:new Date,courses:[]};
}
