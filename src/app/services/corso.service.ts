import { Injectable } from '@angular/core';
import { Corso } from '../model/Corso';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  prenotaCorso(corsoid:number): Observable<any>
  {
    let userId = localStorage.getItem("userId");
    let body = {user_id:userId,corso_id:corsoid};
    return this.http.post<any>("/api/abbonamento",body);
  }
  rimuoviAbbonamento(abbid:number):Observable<any>
  {
    const url = `/api/abbonamento/${abbid}`;
    return this.http.delete<any>(url);
  }

}
