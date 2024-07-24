import { Routes } from '@angular/router';
import { GymComponent } from './gym/gym.component';
import { UserComponent } from './user/user.component';
import { CorsoDetailComponent } from './corso-detail/corso-detail.component';
import { CorsoListComponent } from './corso-list/corso-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
    {path:"",component:LoginFormComponent},
    {path:"gym",component:GymComponent},
    {path:"user/:id",component:UserComponent},
    {path:"corso/:id",component:CorsoDetailComponent},
    {path:"corsi",component:CorsoListComponent},
    {path:"home",component:HomepageComponent},
    {path:"navbar",component:NavbarComponent}
];
