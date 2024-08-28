import { Component } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

constructor(private userService: UserService) { }

isLogged():boolean
{
  return localStorage.getItem('authToken') ? true : false;
}

logout() 
{
  this.userService.logout();
}  

onClick() {
  console.log("cliccato su immagine profilo , apertura informazioni personali");
  this.userService.showInfoUser = !this.userService.showInfoUser;
  console.log(this.userService.showInfoUser);
}

}
