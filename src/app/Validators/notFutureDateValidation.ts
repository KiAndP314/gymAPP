import { AbstractControl, ValidatorFn } from "@angular/forms";

export function notFutureDateValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        // Estrai il valore della data dalla form e dividilo in giorno, mese e anno
        const [day, month, year] = control.value.split('/').map(Number);

        // Crea una nuova data nel formato "anno, mese - 1, giorno"
        const myDate = new Date(year, month - 1, day); // il mese va da 0 a 11

        const today = new Date(); // data di oggi

        // Imposta l'ora di oggi e della data della form a mezzanotte per confrontarle solo sulla base della data
        today.setHours(0, 0, 0, 0);
        myDate.setHours(0, 0, 0, 0);

        if (today >= myDate)
            return null; // no errore, va tutto bene
        else
            return { dateNotValid: { value: control.value } }; // restituisce un oggetto con nome dell'errore + valore errato
    }
}
