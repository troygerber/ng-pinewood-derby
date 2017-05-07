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
import { BracketComponent } from './components/bracket/bracket.component';
import { RaceComponent } from './containers/race/race.component';
import { CompetitorListComponent } from './components/competitor-list/competitor-list.component';
import { CompetitorComponent } from './containers/competitor/competitor.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarComponent } from './containers/car/car.component';
import { AddCompetitorComponent } from './containers/add-competitor/add-competitor.component';
import { AddCarComponent } from './containers/add-car/add-car.component';
import { StatsBoardComponent } from './components/stats-board/stats-board.component';
import { UpcomingRaceComponent } from './components/upcoming-race/upcoming-race.component';
import { ManageRaceComponent } from './containers/manage-race/manage-race.component';
import { ManageCarComponent } from './containers/manage-car/manage-car.component';
import { CheckinComponent } from './containers/checkin/checkin.component';
import { ManageCompetitorComponent } from './containers/manage-competitor/manage-competitor.component';
import { BracketGeneratorComponent } from './containers/bracket-generator/bracket-generator.component';
import { AwardGeneratorComponent } from './containers/award-generator/award-generator.component';
import { TrashTalkGeneratorComponent } from './containers/trash-talk-generator/trash-talk-generator.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { BodyComponent } from './components/body/body.component';
import { WinScreenComponent } from './components/win-screen/win-screen.component';

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
    CompetitorListComponent,
    AddCompetitorComponent,
    AddCarComponent,
    StatsBoardComponent,
    UpcomingRaceComponent,
    ManageRaceComponent,
    ManageCarComponent,
    CheckinComponent,
    ManageCompetitorComponent,
    BracketGeneratorComponent,
    AwardGeneratorComponent,
    TrashTalkGeneratorComponent,
    WrapperComponent,
    BodyComponent,
    WinScreenComponent
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
