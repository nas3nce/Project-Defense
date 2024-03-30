import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { MainComponent } from './main/main/main.component';
import { MaterialModule } from 'src/material.module';
import { CardsComponent } from './main/cards/cards.component';
import { PicturesComponent } from './main/pictures/pictures.component';
import { CatsModule } from './cats/cats.module';
import { AppInterceptorProvider } from './app-interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    MainComponent,
    CardsComponent,
    PicturesComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule,
    UserModule,
    CatsModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    TestDirective
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
