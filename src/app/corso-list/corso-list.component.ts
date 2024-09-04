import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Corso } from '../model/Corso';
import { CorsoService } from '../services/corso.service';
import { CommonModule } from '@angular/common';
import { CorsoDetailComponent } from "../corso-detail/corso-detail.component";

@Component({
  selector: 'app-corso-list',
  standalone: true,
  imports: [NavbarComponent, CommonModule, CorsoDetailComponent,RouterModule],
  templateUrl: './corso-list.component.html',
  styleUrl: './corso-list.component.css',
})
export class CorsoListComponent {

  constructor(private corsoService:CorsoService,private route:ActivatedRoute)
  {
    corsoService.getAll().subscribe(data => this.corsi=data)

  }

  corsi:Corso[]=[];


}
