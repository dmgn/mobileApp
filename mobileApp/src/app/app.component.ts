import { AppevaluationPage } from './../pages/appevaluation/appevaluation';
import { AddrandemploymentPage } from './../pages/addrandemployment/addrandemployment';
import { AddrempverificationPage } from './../pages/addrempverification/addrempverification';
import { SalacctverificationPage } from './../pages/salacctverification/salacctverification';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';
import { LoanreqPage } from '../pages/loanreq/loanreq';
import { IdentityPage } from '../pages/identity/identity';
import { IdentityverificationPage } from '../pages/identityverification/identityverification';
import { AppevalconfirmationPage } from '../pages/appevalconfirmation/appevalconfirmation';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IdentityverificationPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

