import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, SelectPopover } from 'ionic-angular';

/**
 * Generated class for the IdentityverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identityverification',
  templateUrl: 'identityverification.html',
})
export class IdentityverificationPage {

  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad IdentityverificationPage');
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
