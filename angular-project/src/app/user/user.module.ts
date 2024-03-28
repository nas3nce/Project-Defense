import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    UserRoutingModule
  ]
})
export class UserModule { }
