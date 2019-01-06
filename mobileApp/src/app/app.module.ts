import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppevaluationPage } from './../pages/appevaluation/appevaluation';
import { AddrandemploymentPage } from './../pages/addrandemployment/addrandemployment';
import { AddrempverificationPage } from './../pages/addrempverification/addrempverification';
import { SalacctverificationPage } from './../pages/salacctverification/salacctverification';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Digibank } from './app.component';
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
import { MessageService } from '../providers/message-service/message-service';
import { LoanfundedPage } from '../pages/loanfunded/loanfunded';
import { EmirepaymentsetupPage } from '../pages/emirepaymentsetup/emirepaymentsetup';
import { InitemirepaymentPage } from '../pages/initemirepayment/initemirepayment';
import { SalacctsetupPage } from '../pages/salacctsetup/salacctsetup';
import { SalacctconfirmationPage } from '../pages/salacctconfirmation/salacctconfirmation';
import { EsignPage } from '../pages/esign/esign';
import { SalacctverifyPage } from '../pages/salacctverify/salacctverify';
import { Camera } from '@ionic-native/camera';
import { firebaseConfig } from './firebaseconfig';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { DataProvider } from '../providers/data/data';
import { UploadFileServiceProvider } from '../providers/upload-file-service/upload-file-service';
import { SalacctbankstmtPage } from '../pages/salacctbankstmt/salacctbankstmt';


const firebaseAuthConfig = {
  apiKey: "AIzaSyBBuSxVcDmmAuZ4WhxEEyTkWSilfqbgKjE",
  authDomain: "mobileapp1-dc6ff.firebaseapp.com",
  databaseURL: "https://mobileapp1-dc6ff.firebaseio.com",
  projectId: "mobileapp1-dc6ff",
  storageBucket: "mobileapp1-dc6ff.appspot.com",
  messagingSenderId: "658644714320"
}
@NgModule({
  declarations: [
    Digibank,
    HomePage,
    StartPage,
    VerifyPage,
    LoanreqPage,
    IdentityPage,
    IdentityverificationPage,
    EsignPage,
    AddrempverificationPage,
    AddrandemploymentPage,
    AppevaluationPage,
    AppevalconfirmationPage,
    InitemirepaymentPage,
    SalacctsetupPage,
    SalacctverifyPage,
    SalacctverificationPage,
    SalacctconfirmationPage,
    InitemirepaymentPage,
    EmirepaymentsetupPage,
    LoanfundedPage,
    SalacctbankstmtPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Digibank),    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,    
    HttpClientModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Digibank,
    HomePage,
    StartPage,
    VerifyPage,
    LoanreqPage,
    IdentityPage,
    IdentityverificationPage,
    EsignPage,
    SalacctverificationPage,
    AddrempverificationPage,
    AddrandemploymentPage,
    AppevaluationPage,
    AppevalconfirmationPage,
    InitemirepaymentPage,
    SalacctsetupPage,
    SalacctverifyPage,
    SalacctverificationPage,
    SalacctconfirmationPage,
    InitemirepaymentPage,
    EmirepaymentsetupPage,
    LoanfundedPage,
    SalacctbankstmtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FirebaseAuthentication,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageService,
    DataProvider,
    UploadFileServiceProvider
  ]
})
export class AppModule {}
