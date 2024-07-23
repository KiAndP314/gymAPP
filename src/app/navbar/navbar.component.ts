import { Component } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private userService: UserService) { }
  

onClick() {
  console.log("cliccato su immagine profilo , apertura informazioni personali");
  this.userService.showInfoUser = !this.userService.showInfoUser;
  console.log(this.userService.showInfoUser);
}


}
