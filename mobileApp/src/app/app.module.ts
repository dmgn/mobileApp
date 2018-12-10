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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
