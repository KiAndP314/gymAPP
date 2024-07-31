import { Injectable } from '@angular/core';
import { Corso } from '../model/Corso';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  constructor() { }

  private corsi: Corso[] = [
    {
        id: 1,
        name: "Yoga per Principianti",
        descrizione: "Introduzione alle basi dello yoga per migliorare la flessibilità e il relax.",
        orari: "Lunedì e Mercoledì, 08:00 - 09:00",
        sede: "pipo"
    },
    {
        id: 2,
        name: "HIIT Training",
        descrizione: "Allenamento ad alta intensità per bruciare calorie rapidamente.",
        orari: "Martedì e Giovedì, 18:00 - 19:00",
        sede: 'pipo'
    },
    {
        id: 3,
        name: "Pilates",
        descrizione: "Corso di pilates per migliorare la postura e la forza del core.",
        orari: "Mercoledì e Venerdì, 09:00 - 10:00",
        sede:'gino'
    },
    {
        id: 4,
        name: "Zumba",
        descrizione: "Un mix di danza e aerobica per divertirsi e mantenersi in forma.",
        orari: "Lunedì e Giovedì, 19:00 - 20:00",
        sede:'hahah'
    },
    {
        id: 5,
        name: "CrossFit",
        descrizione: "Allenamento funzionale ad alta intensità per aumentare forza e resistenza.",
        orari: "Martedì e Venerdì, 17:00 - 18:00",
        sede:'tastiera'
    },
    {
        id: 6,
        name: "Bodybuilding",
        descrizione: "Corso avanzato di sollevamento pesi per costruire massa muscolare.",
        orari: "Lunedì, Mercoledì e Venerdì, 18:00 - 19:30",
        sede:'csoos'
    },
    {
        id: 7,
        name: "Cardio Boxe",
        descrizione: "Combina tecniche di boxe con esercizi cardio per migliorare la resistenza.",
        orari: "Martedì e Giovedì, 19:00 - 20:00",
        sede:'csoos'
    },
    {
        id: 8,
        name: "Stretching e Mobilità",
        descrizione: "Esercizi di stretching per migliorare la mobilità e prevenire infortuni.",
        orari: "Mercoledì e Venerdì, 08:00 - 09:00",
        sede:'csoos'
    },
    {
        id: 9,
        name: "Functional Training",
        descrizione: "Allenamento funzionale per migliorare la forza e la coordinazione.",
        orari: "Lunedì e Mercoledì, 17:00 - 18:00",
        sede:'csoos'
    },
    {
        id: 10,
        name: "Circuit Training",
        descrizione: "Allenamento a circuito per lavorare su diverse capacità fisiche.",
        orari: "Martedì e Giovedì, 08:00 - 09:00",
        sede:'csoos'
    }
];

getCourses(): Corso[] {
  return this.corsi;
}

getCorsoById(id: number): Corso | undefined {
  return this.corsi.find(corsi => corsi.id === id);
}

addCorso(corso: Corso) {
  this.corsi.push(corso);
  return of(this.corsi);
}

}
