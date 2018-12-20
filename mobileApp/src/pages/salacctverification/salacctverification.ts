import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InitemirepaymentPage } from '../initemirepayment/initemirepayment';

/**
 * Generated class for the SalacctverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salacctverification',
  templateUrl: 'salacctverification.html',
})
export class SalacctverificationPage {

  data: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalacctverificationPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SalacctverificationPage');
    this.navParams.get("callbackResponse").
    subscribe(data => { 
      sleep(3000);
      this.data = data;
       console.log(data);
     } )
    const sleep = ( ms ) => {
      const end = +(new Date()) + ms;
      while( +(new Date()) < end ){ } 
    }
  }

  showInitEmiRepaymentSetupPage(){
    this.navCtrl.push(InitemirepaymentPage);
  }

}
