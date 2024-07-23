import { Routes } from '@angular/router';
import { GymComponent } from './gym/gym.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"/login",component:LoginComponent},
    {path:"/Gym",component:GymComponent},
    {path:"/User",component:UserComponent}
];
