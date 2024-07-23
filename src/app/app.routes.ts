import { Routes } from '@angular/router';
import { GymComponent } from './gym/gym.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"gym",component:GymComponent},
    {path:"user",component:UserComponent}
];
