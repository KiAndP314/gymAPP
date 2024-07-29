import { Routes } from '@angular/router';
import { GymComponent } from './gym/gym.component';
import { UserComponent } from './user/user.component';
import { CorsoDetailComponent } from './corso-detail/corso-detail.component';
import { CorsoListComponent } from './corso-list/corso-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageAtletaComponent } from './home-page-atleta/home-page-atleta.component';

export const routes: Routes = [
    {path:"",component:LoginFormComponent},
    {path:"gym",component:GymComponent},
    {path:"user/:id",component:HomePageAtletaComponent},
    {path:"corso/:id",component:CorsoDetailComponent},
    {path:"corsi",component:CorsoListComponent},
    {path:"home",component:HomepageComponent},
    {path:"navbar",component:NavbarComponent},
    {path:"homepageatleta",component:HomePageAtletaComponent}
];
