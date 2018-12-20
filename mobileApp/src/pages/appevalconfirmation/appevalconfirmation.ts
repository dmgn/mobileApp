import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EsignPage } from '../esign/esign';

/**
 * Generated class for the AppevalconfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appevalconfirmation',
  templateUrl: 'appevalconfirmation.html',
})
export class AppevalconfirmationPage {

  data : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppevalconfirmationPage');
  }

  showEsignPage(){
    this.navCtrl.push(EsignPage);
  }


}
