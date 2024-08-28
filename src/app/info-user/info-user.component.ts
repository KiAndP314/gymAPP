import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../model/User';

@Component({
  selector: 'app-info-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.css'
})
export class InfoUserComponent {
  constructor(private userService: UserService) { }

  getMyVariable(): boolean {
    return this.userService.showInfoUser;
  }

  chiudiInfoUser(event:Event) 
  {
    const elementId = (event.target as HTMLElement).id;
    if(elementId == "sfondo")
        this.userService.showInfoUser = false;
    
  }

  ngOnInit() 
  {
  }
}
