import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalacctsetupPage } from '../salacctsetup/salacctsetup';

/**
 * Generated class for the EsignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esign',
  templateUrl: 'esign.html',
})
export class EsignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsignPage');
  }

  showSalAcctSetupPage(){
    this.navCtrl.push(SalacctsetupPage);
  }
}
