import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main/main.component';
import { MaterialModule } from 'src/material.module';
import { CardsComponent } from './main/cards/cards.component';
import { PicturesComponent } from './main/pictures/pictures.component';
import { AppInterceptorProvider } from './app-interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { UserGuard } from './core/guards/user-guard';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardsComponent,
    PicturesComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
