import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
    path: 'user',
    children: [
        {
            path: 'login',
            component: LoginComponent,
            data: { title: 'Login' }
        },
        {
            path: 'register',
            component: RegisterComponent,
            data: { title: 'Register' }
        },
        {
            path: 'profile',
            component: ProfileComponent,
            data: { title: 'Profile' }
        },
        {
            path: 'logout',
            component: LogoutComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
