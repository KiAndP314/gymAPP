import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let email = control.value;
    if (!email) {
      return null; 
    }

    let hasAtSign = email.includes('@');
    let hasDot = email.includes('.');

    if (!hasAtSign || !hasDot) {
      return { invalidEmail: 'Email must contain "@" and "."' };
    }

    return null;
  };
}