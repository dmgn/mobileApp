import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';

import { AppevaluationPage } from './../pages/appevaluation/appevaluation';
import { AddrandemploymentPage } from './../pages/addrandemployment/addrandemployment';
import { AddrempverificationPage } from './../pages/addrempverification/addrempverification';
import { SalacctverificationPage } from './../pages/salacctverification/salacctverification';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';
import { VerifyPage } from '../pages/verify/verify';
import { LoanreqPage } from '../pages/loanreq/loanreq';
import { IdentityPage } from '../pages/identity/identity';
import { IdentityverificationPage } from '../pages/identityverification/identityverification';
import { AppevalconfirmationPage } from '../pages/appevalconfirmation/appevalconfirmation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Firebase } from '@ionic-native/firebase/ngx';


const firebaseAuth = {
  apiKey: "AIzaSyBBuSxVcDmmAuZ4WhxEEyTkWSilfqbgKjE",
  authDomain: "mobileapp1-dc6ff.firebaseapp.com",
  databaseURL: "https://mobileapp1-dc6ff.firebaseio.com",
  projectId: "mobileapp1-dc6ff",
  storageBucket: "mobileapp1-dc6ff.appspot.com",
  messagingSenderId: "658644714320"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartPage,
    VerifyPage,
    LoanreqPage,
    IdentityPage,
    IdentityverificationPage,
    SalacctverificationPage,
    AddrempverificationPage,
    AddrandemploymentPage,
    AppevaluationPage,
    AppevalconfirmationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartPage,
    VerifyPage,
    LoanreqPage,
    IdentityPage,
    IdentityverificationPage,
    SalacctverificationPage,
    AddrempverificationPage,
    AddrandemploymentPage,
    AppevaluationPage,
    AppevalconfirmationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FirebaseAuthentication,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
