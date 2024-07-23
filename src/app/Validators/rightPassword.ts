import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let password = control.value;
    if (!password) {
      return null; 
    }

    let minNumber = password.length>=8;
    let hasUpperCase = password.toUpperCase()!=password && password.toLowerCase()!=password;
    let hasNumber = false;
    for(let i = 0;i<10;i++)
        if(password.includes(i))
            hasNumber=true;

    if (!minNumber || !hasUpperCase || !hasNumber) {
      return { invalidEmail: 'Password must be at least 8 characters long, contain at least one uppercase letter, and one number' };
    }

    return null;
  };
}