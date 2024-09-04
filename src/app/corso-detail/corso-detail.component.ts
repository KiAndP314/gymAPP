import { Component, Input } from '@angular/core';
import { CorsoService } from '../services/corso.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Corso } from '../model/Corso';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-corso-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, NavbarComponent],
  templateUrl: './corso-detail.component.html',
  styleUrl: './corso-detail.component.css'
})
export class CorsoDetailComponent {

  constructor(private corsoService:CorsoService,private route:ActivatedRoute, private router:Router)
  {
    let corsoId: number = parseInt(this.route.snapshot.paramMap.get("id")!);
    console.log(corsoId);
    this.corsoService.getOne(corsoId).subscribe(
      
      data => {
        this.corso = data;
        
      },
      error => {
        console.error("Errore durante il caricamento del corso:", error);
      }
    );
  }

  @Input() corso!: Corso;

  prenotaCorso() 
  {
    let corsoId: number = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.corsoService.prenotaCorso(corsoId).subscribe
    (
      data => 
        {
          this.router.navigate(["user",localStorage.getItem("userId")])
        }
    )
   
  }
}
