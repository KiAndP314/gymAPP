import { Injectable } from '@angular/core';
import { Entity } from '../model/Entity';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private Entitys: Entity[] =[
    {
      id: 1,
      email: 'john.doe@example.com',
      password:"John1",
      type:"user"
    },
    {
      id: 2,
      email: 'jane.johnson@example.com',
      password:"Jane1",
      type:"user"
    },
    {
      id: 3,
      email: 'bob.smith@example.com',
      password:"Bob1",
      type:"user"
    },
    {
      id: 4,
      email: 'alice.brown@example.com',
      password:"Alice1",
      type:"user"
    },
    {
      id: 5,
      email: 'mike.davis@example.com',
      password:"Mike1",
      type:"user"
    },
    {
      id: 6,
      email: "gym1@example.com",
      password: "gym1pass",
      type: "gym"
    },
    {
      id: 7,
      email: "gym2@example.com",
      password: "gym2pass",
      type: "gym"
    },
    {
      id: 8,
      email: "gym3@example.com",
      password: "gym3pass",
      type: "gym"
    },
    {
      id: 9,
      email: "gym4@example.com",
      password: "gym4pass",
      type: "gym"
    },
    {
      id: 10,
      email: "gym5@example.com",
      password: "gym5pass",
      type: "gym"
    }
  ];

  getEntitys(): Entity[] {
    return this.Entitys;
  }

  getEntityById(id: number): Entity | undefined {
    return this.Entitys.find(entity => entity.id === id);
  }
  
  
  
}
