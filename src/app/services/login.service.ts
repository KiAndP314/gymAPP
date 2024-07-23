import id from '@angular/common/locales/id';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] =[
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      dob: new Date('1990-01-01'),
      gym: 'Fitness 24/7',
      email: 'john.doe@example.com',
      password:"John1"
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Johnson',
      dob: new Date('1992-03-15'),
      gym: 'Powerhouse Gym',
      email: 'jane.johnson@example.com',
      password:"Jane1"
    },
    {
      id: 3,
      name: 'Bob',
      surname: 'Smith',
      dob: new Date('1985-06-20'),
      gym: 'Gold',
      email: 'bob.smith@example.com',
      password:"Bob1"
    },
    {
      id: 4,
      name: 'Alice',
      surname: 'Brown',
      dob: new Date('1995-09-10'),
      gym: 'LA Fitness',
      email: 'alice.brown@example.com',
      password:"Alice1"
    },
    {
      id: 5,
      name: 'Mike',
      surname: 'Davis',
      dob: new Date('1988-02-25'),
      gym: 'Anytime Fitness',
      email: 'mike.davis@example.com',
      password:"Mike1"
    }
  ];

  getUsers(): User[] {
    return this.users;
  }

  
  
}
