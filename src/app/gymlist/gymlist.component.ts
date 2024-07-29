import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-gymlist',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './gymlist.component.html',
  styleUrl: './gymlist.component.css'
})
export class GymlistComponent {

}
