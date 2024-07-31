import { Injectable } from '@angular/core';
import { CorsoService } from './corso.service';

interface Corso {
  id: number;
  nome: string;
}

interface Sede {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class PalestraService {

  constructor(private corsoService:CorsoService) { }

  getCorsi() {
    return this.corsoService.getCourses();
  }

  getSedi(corsoId: number): Sede[] {
    const sedi: { [key: number]: Sede[] } = {
      1: [
        { id: 1, nome: 'Sede A' },
        { id: 2, nome: 'Sede B' }
      ],
      2: [
        { id: 3, nome: 'Sede C' },
        { id: 4, nome: 'Sede D' }
      ],
      3: [
        { id: 5, nome: 'Sede E' },
        { id: 6, nome: 'Sede F' }
      ]
    };
    return sedi[corsoId] || [];
  }

 
}
