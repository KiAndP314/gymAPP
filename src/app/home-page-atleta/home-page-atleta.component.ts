import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page-atleta',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './home-page-atleta.component.html',
  styleUrl: './home-page-atleta.component.css'
})
export class HomePageAtletaComponent {
  constructor(private userService: UserService) { }

  getMyVariable(): boolean {
    return this.userService.showInfoUser;
  }

  // ngAfterViewInit() {
  //   document.addEventListener('click', (event) => {
  //      target = event.target;
  //   if (target.closest('#infoUser')) {
  //       this.userService.showInfoUser = false;
  //     }
  //   });
  // }
  

}
