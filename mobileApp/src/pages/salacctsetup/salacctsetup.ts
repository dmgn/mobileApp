import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalacctverificationPage } from '../salacctverification/salacctverification';
import { SalacctverifyPage } from '../salacctverify/salacctverify';

/**
 * Generated class for the SalacctsetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salacctsetup',
  templateUrl: 'salacctsetup.html',
})
export class SalacctsetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalacctsetupPage');
  }

  showSalAcctVerificationPage(){
    this.navCtrl.push(SalacctverifyPage);
  }

}
