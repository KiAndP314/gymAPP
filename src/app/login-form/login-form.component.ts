import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { notFutureDateValidation } from '../Validators/notFutureDateValidation';
import { passwordValidator } from '../Validators/rightPassword';
import { emailValidator } from '../Validators/hasRightEmail';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Entity } from '../model/Entity';


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
      name : new FormControl('',[Validators.required]),
      surname : new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required,notFutureDateValidation()]),
      email: new FormControl('',[Validators.required,emailValidator()]),
      password: new FormControl('',[Validators.required,passwordValidator()])
    }
  );

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login', this.loginForm.value);
    }
  }

  onRegister() {
    if (this.regForm.valid) {
      console.log('Register', this.regForm.value);
    }
  }
  
  // salva()
  // {
  //   this.service.addUser(this.regForm.value,)
  //   console.log(this.service.getUsers);
  // }

  loginError:string = "";

  login()
  {
    this.service.loginUser(this.loginForm.value,)
    .subscribe(
      {
        next: (response:any) => 
        {
            const token = response.accessToken;
            
            localStorage.setItem('authToken', token);
            this.router.navigate(['user/:id']);
        },
        error: badResponse => 
        {
          this.loginError = "hai sbagliato";
        }
      }
    )
  }
}


