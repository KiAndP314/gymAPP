import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { notFutureDateValidation } from '../Validators/notFutureDateValidation';
import { passwordValidator } from '../Validators/rightPassword';
import { emailValidator } from '../Validators/hasRightEmail';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Entity } from '../model/Entity';

//ok


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private service:UserService,private router: Router){}

  isLogin: boolean = true;
 
  loginForm:FormGroup = new FormGroup(
    {
      email: new FormControl('',[Validators.required,emailValidator()]),
      password: new FormControl('',[Validators.required,passwordValidator()])
    }
  )

  regForm:FormGroup = new FormGroup(
    {
      nome : new FormControl('',[Validators.required]),
      cognome : new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required,notFutureDateValidation()]),
      email: new FormControl('',[Validators.required,emailValidator()]),
      password: new FormControl('',[Validators.required,passwordValidator()])
    }
  );

  toggleForm() {
    this.isLogin = !this.isLogin;
  }




  loginError:string = "";
  regError:string = "";

  login()
  {
    this.service.loginUser(this.loginForm.value)
    .subscribe(
      {
        next: (response:any) => 
        {
            const token = response.accessToken;
            
            localStorage.setItem('authToken', token);
            localStorage.setItem('userId',response.id);
            this.router.navigate(['user',response.id]);
        },
        error: badResponse => 
        {
          this.loginForm.get('email')?.setErrors({userNotFound:"User not found!"})
        }
      }
    )
  }

  register()
  {
    if (this.regForm.valid) {
      this.service.regUser(this.regForm.value)
      .subscribe(
        {
          next: (response) => 
          {
            this.loginForm.get("email")?.setValue(this.regForm.get("email")?.value); 
            this.loginForm.get("password")?.setValue(this.regForm.get("password")?.value);
            this.login()
          },
          error: badResponse =>
          {
            console.log('Registration error:', badResponse); // Debugging
            if (badResponse.status === 409) {
              alert('Username already taken');
            } else if (badResponse.status === 400) {
              alert('Invalid input. Please check your details.');
            } else {
              alert('An unexpected error occurred. Please try again later.');
            }
          
          }
        }
      )
    }else{
      console.log('Form is not valid');
    }
}

}
