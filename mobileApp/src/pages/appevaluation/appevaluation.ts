import { AppevalconfirmationPage } from './../appevalconfirmation/appevalconfirmation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppevaluationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appevaluation',
  templateUrl: 'appevaluation.html',
})
export class AppevaluationPage {

  data : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppevaluationPage');
  }

  showAppEvalConfirmationPage(){
    this.navCtrl.push(AppevalconfirmationPage);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad AppEvaluationPage');
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
  
  

}
