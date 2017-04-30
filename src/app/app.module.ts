import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { myFirebaseConfig, myFirebaseAuthConfig } from './firebase.config';

import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { AppRoutes } from './routes';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { BracketComponent } from './containers/bracket/bracket.component';
import { RaceComponent } from './containers/race/race.component';
import { CompetitorListComponent } from './components/competitor-list/competitor-list.component';
import { CompetitorComponent } from './containers/competitor/competitor.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarComponent } from './containers/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarListComponent,
    CarComponent,
    ImageUploadComponent,
    HeaderComponent,
    WelcomeComponent,
    CompetitorComponent,
    BracketComponent,
    RaceComponent,
    CompetitorListComponent
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
