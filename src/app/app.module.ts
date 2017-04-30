import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { myFirebaseConfig, myFirebaseAuthConfig } from './firebase.config';

import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { AppRoutes } from './routes';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CarListComponent } from './containers/car-list/car-list.component';
import { CarComponent } from './containers/car/car.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

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
