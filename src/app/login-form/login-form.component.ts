import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { notFutureDateValidation } from '../Validators/notFutureDateValidation';
import { passwordValidator } from '../Validators/rightPassword';
import { emailValidator } from '../Validators/hasRightEmail';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private service:UserService){}

  isLogin: boolean = true;
 
  

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

  onRegister() {
    if (this.regForm.valid) {
      
      console.log('Register', this.regForm.value);
    }
  }
  
  salva()
  {
    this.service.addUser(this.regForm.value,)
  }
}


