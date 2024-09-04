import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/User';
import { CorsoService } from '../services/corso.service';
import { Corso } from '../model/Corso';

@Component({
  selector: 'app-home-page-atleta',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home-page-atleta.component.html',
  styleUrl: './home-page-atleta.component.css'
})
export class HomePageAtletaComponent {
  constructor(private userService: UserService,private route: ActivatedRoute,private corsoService:CorsoService) { }

  user!:User;
  
  ngOnInit(): void 
  {
    let id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.userService.getUser(id).subscribe(response=> this.user=response);
  }
  // user:User = {id:0,email:"",name:"",surname:"",gym:"",dob:new Date,courses:[]}
  rimuoviAbbonamento(abbid:number) {
    {
      this.corsoService.rimuoviAbbonamento(abbid).subscribe
      (
        resp=> this.user.abbonamenti.splice(this.user.abbonamenti.findIndex(a => a.id==abbid),1)
      )
     
    }

  }

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
