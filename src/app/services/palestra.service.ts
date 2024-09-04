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
 
}
