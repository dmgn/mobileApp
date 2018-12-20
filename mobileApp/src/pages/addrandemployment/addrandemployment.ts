import { AddrempverificationPage } from './../addrempverification/addrempverification';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageService } from '../../providers/message-service/message-service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AddrandemploymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addrandemployment',
  templateUrl: 'addrandemployment.html',
})
export class AddrandemploymentPage {

  responseData : Observable<any>;

  constructor(private msgSvc: MessageService, public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddrandemploymentPage');
  }

  showAddrEmpVerification(){
    this.responseData = this.sendRequest();
    console.log(this.responseData.map((res :Response) => console.log(res.json())));
    this.navCtrl.push(AddrempverificationPage, {
      callbackResponse : this.responseData
    });
  }

  sendRequest(){
    return this.msgSvc.getMessages(); 
  }

}
