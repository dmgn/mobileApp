import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalacctverificationPage } from '../salacctverification/salacctverification';
import { MessageService } from '../../providers/message-service/message-service';
import { Observable } from 'rxjs';

/**
 * Generated class for the SalacctverifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salacctverify',
  templateUrl: 'salacctverify.html',
})
export class SalacctverifyPage {

  responseData : Observable<any> 

  constructor(private msgSvc: MessageService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalacctverifyPage');
  }

  showSalAcctVerificationPage(){
    this.responseData = this.sendRequest()
    console.log(this.responseData.map((res :Response) => console.log(res.json())));
    this.navCtrl.push(SalacctverificationPage, {
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
