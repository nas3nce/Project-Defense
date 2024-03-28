import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { MainComponent } from './main/main/main.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    data: {title : "Home"}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
