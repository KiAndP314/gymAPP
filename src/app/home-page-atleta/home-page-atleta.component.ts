import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { InfoUserComponent } from "../info-user/info-user.component";
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-home-page-atleta',
  standalone: true,
  imports: [CommonModule, InfoUserComponent, NavbarComponent],
  templateUrl: './home-page-atleta.component.html',
  styleUrl: './home-page-atleta.component.css'
})
export class HomePageAtletaComponent {
  constructor(private userService: UserService,private route: ActivatedRoute) { }

  user!:User;
  
  ngOnInit(): void 
  {
    let id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.userService.getUser(id).subscribe(response=> this.user=response);
  }
  // user:User = {id:0,email:"",name:"",surname:"",gym:"",dob:new Date,courses:[]}
 

  //metodo carica dati user
    // this.userService.getUserById(this.userService.id).subscribe(u => {
    //   this.userService.user = u as User;
    //   if (this.userService.user) {
    //     // uso l'oggetto user come se fosse un oggetto di tipo User
    //     console.log(this.userService.user);
    //   } else {
    //     console.log('User not found');
    //   }
    // });

  


  

}
