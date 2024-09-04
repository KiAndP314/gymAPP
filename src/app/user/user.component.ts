import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit 
{
  user!: User;

  constructor(private route: ActivatedRoute, private serve: UserService)
  {
  }

  ngOnInit(): void 
  {
    let id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.serve.getUser(id).subscribe(response=> this.user=response);
  }
   
}
