import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Corso } from '../model/Corso';
import { PalestraService } from '../services/palestra.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abbonamenti',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CommonModule],
  templateUrl: './abbonamenti.component.html',
  styleUrl: './abbonamenti.component.css'
})
export class AbbonamentiComponent  implements OnInit {
onSedeChange() {
throw new Error('Method not implemented.');
}
  constructor(private palestraService: PalestraService) { }

  corsi: Corso[] = [];
  sedi: { id: number, nome: string }[] = [];
  orari: string[] = [];
  selectedCorso: number | null = null;
  selectedSede: number | null = null;

  ngOnInit() {
  }

  onCorsoChange() {
    if (this.selectedCorso !== null) {
      this.orari = [];
      this.selectedSede = null; // Resetta la selezione della sede quando si cambia corso
    } else {
      this.sedi = [];
      this.orari = [];
    }
  }
  
  
}
