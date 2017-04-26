import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import {MaterialModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {myFirebaseConfig, myFirebaseAuthConfig } from './firebase.config';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car/car.component';
import {AppRoutes} from './routes'
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarListComponent,
    CarComponent,
    ImageUploadComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
