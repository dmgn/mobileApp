import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmirepaymentsetupPage } from '../emirepaymentsetup/emirepaymentsetup';

/**
 * Generated class for the InitemirepaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initemirepayment',
  templateUrl: 'initemirepayment.html',
})
export class InitemirepaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitemirepaymentPage');
  }

  showEmiRepaymentSetupPage(){
    this.navCtrl.push(EmirepaymentsetupPage);
  }
}
