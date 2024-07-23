import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Users: User[] =[
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      dob: new Date('1990-01-01'),
      gym: 'Fitness 24/7',
      email: 'john.doe@example.com',
      password: "John1",
      couses: []
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Johnson',
      dob: new Date('1992-03-15'),
      gym: 'Powerhouse Gym',
      email: 'jane.johnson@example.com',
      password: "Jane1",
      couses: []
    },
    {
      id: 3,
      name: 'Bob',
      surname: 'Smith',
      dob: new Date('1985-06-20'),
      gym: 'Gold',
      email: 'bob.smith@example.com',
      password: "Bob1",
      couses: []
    },
    {
      id: 4,
      name: 'Alice',
      surname: 'Brown',
      dob: new Date('1995-09-10'),
      gym: 'LA Fitness',
      email: 'alice.brown@example.com',
      password: "Alice1",
      couses: []
    },
    {
      id: 5,
      name: 'Mike',
      surname: 'Davis',
      dob: new Date('1988-02-25'),
      gym: 'Anytime Fitness',
      email: 'mike.davis@example.com',
      password: "Mike1",
      couses: []
    }
  ];
}
