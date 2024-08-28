import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let password = control.value;
    if (!password) {
      return null; 
    }

    // Verifica che la password abbia almeno 8 caratteri
    let minNumber = password.length >= 8;

    // Verifica che ci sia almeno una lettera maiuscola e una minuscola
    let hasUpperCaseAndLower = password.toUpperCase() !== password && password.toLowerCase() !== password;

    // Verifica che ci sia almeno un numero
    let hasNumber = /\d/.test(password);

    // Se una delle condizioni non è soddisfatta, restituisce un errore
    if (!minNumber || !hasUpperCaseAndLower || !hasNumber) {
      return { 
        invalidPassword: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number' 
      };
    }

    return null;
  };
}
