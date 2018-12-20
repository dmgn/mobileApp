import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoanfundedPage } from '../loanfunded/loanfunded';

/**
 * Generated class for the EmirepaymentsetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emirepaymentsetup',
  templateUrl: 'emirepaymentsetup.html',
})
export class EmirepaymentsetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmirepaymentsetupPage');
  }

  showLoanFundedPage(){
    this.navCtrl.push(LoanfundedPage);
  }
}
