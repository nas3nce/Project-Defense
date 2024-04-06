import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { UserGuard } from '../core/guards/user-guard';
import { GuestGuard } from '../core/guards/guest-guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserPostsComponent } from './user-posts/user-posts.component';


const routes: Routes = [
    // {
    // path: 'user',
    // children: [
        {
            path: 'login',
            component: LoginComponent,
            data: { title: 'Login' },
            canActivate: [UserGuard]
        },
        {
            path: 'register',
            component: RegisterComponent,
            data: { title: 'Register' },
            canActivate: [UserGuard]
        },
        {
            path: 'profile',
            component: ProfileComponent,
            data: { title: 'Profile' },
            canActivate: [GuestGuard]
        },
        {
            path: 'edit',
            component: EditProfileComponent,
            data: { title: 'Edit Profile' },
            canActivate: [GuestGuard]
        },
        {
            path: 'user-posts',
            component: UserPostsComponent,
            data: { title: 'Your Posts' },
            canActivate: [GuestGuard]
        },
        {
            path: 'logout',
            component: LogoutComponent,
            canActivate: [GuestGuard]
        }
    // ]
// }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
