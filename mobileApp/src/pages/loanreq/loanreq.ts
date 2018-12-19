import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentityPage } from '../identity/identity';

/**
 * Generated class for the LoanreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loanreq',
  templateUrl: 'loanreq.html',
})
export class LoanreqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanreqPage');
  }

  openIdentityPage(){
    this.navCtrl.push(IdentityPage);
  }
}
