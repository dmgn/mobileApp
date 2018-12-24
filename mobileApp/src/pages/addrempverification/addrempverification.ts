import { MessageService } from './../../providers/message-service/message-service';
import { AppevaluationPage } from './../appevaluation/appevaluation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the AddrempverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addrempverification',
  templateUrl: 'addrempverification.html',
})
export class AddrempverificationPage {

  data : any;
  responseData : Observable<any>

  constructor(private msgSvc : MessageService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AddrempverificationPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad AddrempverificationPage');
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

  showAppEvalPage(){
    this.responseData = this.sendRequest()
    console.log(this.responseData.map((res :Response) => console.log(res.json())));
    this.navCtrl.push(AppevaluationPage, {
      callbackResponse : this.responseData
    });
  }

  sendRequest(){
     return this.msgSvc.getMessages(); 
   }

}
