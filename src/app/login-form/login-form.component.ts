import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private service:LoginService){}

  regForm:FormGroup = new FormGroup(
    {
      name : new FormControl('',[Validators.required]),
      surname : new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    }
  );
  
  salva()
  {
    
  }
}
