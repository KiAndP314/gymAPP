import { Component, Input } from '@angular/core';
import { CorsoService } from '../services/corso.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Corso } from '../model/Corso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corso-detail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './corso-detail.component.html',
  styleUrl: './corso-detail.component.css'
})
export class CorsoDetailComponent {

  constructor(private corsoService:CorsoService,private route:ActivatedRoute)
  {
    let corsoId:number = parseInt(route.snapshot.paramMap.get("id")!);
    corsoService.getOne(corsoId)
    .subscribe(
      data => 
      {
        this.corso = data;
      }
    )

  }

  @Input() corso!:Corso;

}
