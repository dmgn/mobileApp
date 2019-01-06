import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageService } from '../../providers/message-service/message-service';
import { AddrempverificationPage } from './../addrempverification/addrempverification';
import { Observable } from 'rxjs/Observable';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';

/**
 * Generated class for the SalacctbankstmtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salacctbankstmt',
  templateUrl: 'salacctbankstmt.html',
})
export class SalacctbankstmtPage {

  responseData : Observable<any>;

  bankStatement1FileName : String;
  selectedbankStatement1 : FileList;
  bankStatement1FileUpload : FileUpload;
  bankStatement1FileProgress : { percentage: number } = { percentage: 0 };

  bankStatement2FileName : String;
  selectedbankStatement2 : FileList;
  bankStatement2FileUpload : FileUpload;
  bankStatement2FileProgress : { percentage: number } = { percentage: 0 };

  bankStatement3FileName : String;
  selectedbankStatement3 : FileList;
  bankStatement3FileUpload : FileUpload;
  bankStatement3FileProgress : { percentage: number } = { percentage: 0 };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private msgSvc: MessageService,
    private uploadService: UploadFileServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalacctbankstmtPage');
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

  selectBankStatement1File(event) {
    this.bankStatement1FileProgress.percentage = 0;
    const file = event.target.files.item(0);
    this.selectedbankStatement1 = event.target.files;   
    this.bankStatement1FileName = this.selectedbankStatement1[0].name;
   // if (file.type.match('image.*')) {
     // this.selectedFiles = event.target.files;
   // } else {
   //   alert('invalid format!');
   // }
  }


  uploadBankStatement1File() {
    const file = this.selectedbankStatement1.item(0);
    this.selectedbankStatement1 = undefined;
    this.bankStatement1FileName = undefined;
    this.bankStatement1FileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage("bankstmt", this.bankStatement1FileUpload, this.bankStatement1FileProgress);
    this.bankStatement1FileProgress.percentage = undefined;
  }

  selectBankStatement2File(event) {
    this.bankStatement2FileProgress.percentage = 0;
    const file = event.target.files.item(0);
    this.selectedbankStatement2 = event.target.files;   
    this.bankStatement2FileName = this.selectedbankStatement2[0].name;
   // if (file.type.match('image.*')) {
     // this.selectedFiles = event.target.files;
   // } else {
   //   alert('invalid format!');
   // }
  }


  uploadBankStatement2File() {
    const file = this.selectedbankStatement2.item(0);
    this.selectedbankStatement2 = undefined;
    this.bankStatement2FileName = undefined;
    this.bankStatement2FileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage("bankstmt",this.bankStatement2FileUpload, this.bankStatement2FileProgress);
    this.bankStatement2FileProgress.percentage = undefined;
  }



  selectBankStatement3File(event) {
    this.bankStatement3FileProgress.percentage = 0;
    const file = event.target.files.item(0);
    this.selectedbankStatement3 = event.target.files;   
    this.bankStatement3FileName = this.selectedbankStatement3[0].name;
   // if (file.type.match('image.*')) {
     // this.selectedFiles = event.target.files;
   // } else {
   //   alert('invalid format!');
   // }
  }


  uploadBankStatement3File() {
    const file = this.selectedbankStatement3.item(0);
    this.selectedbankStatement3 = undefined;
    this.bankStatement3FileName = undefined;
    this.bankStatement3FileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage("bankstmt",this.bankStatement3FileUpload, this.bankStatement3FileProgress);
    this.bankStatement3FileProgress.percentage = undefined;
  }



}
