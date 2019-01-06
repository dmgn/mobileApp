import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerifyPage } from '../verify/verify';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  @ViewChild('email') email;

  @ViewChild('passwd') passwd;
  
  @ViewChild('phone') phone;
  
  verificationId : any;

  constructor( private firebaseAuthentication: FirebaseAuthentication, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
    
  
  }

  sendSMS(){
    console.log("Inside sendSMS");
  /*
    this.firebaseAuthentication.verifyPhoneNumber(this.phone.value, 60).
    then( (res: any)=>{
       alert("SMS sent successfully");
       console.log("SMS sent" + res);
    })
    .catch((error: any) => {
      console.error(error)
    }); 
    */
    console.log("Exiting sendSMS");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  openVerifyPage(){
    this.sendSMS();
    console.log(this.email.value, this.passwd.value, this.phone.value);
    this.navCtrl.push(VerifyPage);
  }

}
