import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentityverificationPage } from '../identityverification/identityverification';
import { MessageService } from '../../providers/message-service/message-service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the IdentityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identity',
  templateUrl: 'identity.html',
})
export class IdentityPage {

  constructor(private msgSvc: MessageService, public navCtrl: NavController, public navParams: NavParams) {
  }

  responseData : Observable<any>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentityPage');
  }

  identityVerification(){
    this.responseData = this.sendRequest()
    console.log(this.responseData.map((res :Response) => console.log(res.json())));
    this.navCtrl.push(IdentityverificationPage, {
      callbackResponse : this.responseData
    });
  }

  sendRequest(){
     return this.msgSvc.getMessages(); 
     
    /* .subscribe(data => { 
       console.log(data);
       this.responseData = data;
     } );*/
  }

}
