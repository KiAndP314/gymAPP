import { Injectable } from '@angular/core';
import { Corso } from '../model/Corso';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Corso[]>
  {
    return this.http.get<Corso[]>("/api/corsi");
  }

  getOne(id: number): Observable<Corso> {
    const url = `/api/corsi/${id}`; // Assicurati che baseUrl sia definito correttamente
    return this.http.get<Corso>(url);
  }


}
