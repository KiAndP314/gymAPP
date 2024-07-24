import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomePageAtletaComponent } from "./home-page-atleta/home-page-atleta.component";
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { InfoUserComponent } from "./info-user/info-user.component";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginFormComponent, HomepageComponent, NavbarComponent, HomePageAtletaComponent, CommonModule, InfoUserComponent,BrowserModule],
  providers: [UserService], // Aggiungi qui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gymAPP';

  constructor(private userService: UserService) { }

  getMyVariable(): boolean {
    return this.userService.showInfoUser;
  }
}
