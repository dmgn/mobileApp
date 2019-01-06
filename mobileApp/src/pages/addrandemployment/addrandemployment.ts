import { AddrempverificationPage } from './../addrempverification/addrempverification';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageService } from '../../providers/message-service/message-service';
import { Observable } from 'rxjs/Observable';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { SalacctbankstmtPage } from './../salacctbankstmt/salacctbankstmt';
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

  addressProofFileName : String;
  selectedAddressProofFile : FileList;
  addressProofFileUpload : FileUpload;
  addressProofFileUploadProgress : { percentage: number } = { percentage: 0 };

  salarySlip1FileName : String;
  selectedSalarySlip1File : FileList;
  salarySlip1FileUpload : FileUpload;
  salarySlip1FileProgress : { percentage: number } = { percentage: 0 };


  salarySlip2FileName : String;
  selectedSalarySlip2File : FileList;
  salarySlip2FileUpload : FileUpload;
  salarySlip2FileProgress : { percentage: number } = { percentage: 0 };

  
  selectSalarySlip1File(event) {
    this.salarySlip1FileProgress.percentage = 0;
    const file = event.target.files.item(0);
    this.selectedSalarySlip1File = event.target.files;   
    this.salarySlip1FileName = this.selectedSalarySlip1File[0].name;
   // if (file.type.match('image.*')) {
     // this.selectedFiles = event.target.files;
   // } else {
   //   alert('invalid format!');
   // }
  }


  uploadSalarySlip1File() {
    const file = this.selectedSalarySlip1File.item(0);
    this.selectedSalarySlip1File = undefined;
    this.salarySlip1FileName = undefined;
    this.salarySlip1FileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage("addrproof", this.salarySlip1FileUpload, this.salarySlip1FileProgress);
    this.salarySlip1FileProgress.percentage = undefined;
  }


  selectSalarySlip2File(event) {
    this.salarySlip2FileProgress.percentage = 0;
    const file = event.target.files.item(0);
    this.selectedSalarySlip2File = event.target.files;   
    this.salarySlip2FileName = this.selectedSalarySlip2File[0].name;
   // if (file.type.match('image.*')) {
     // this.selectedFiles = event.target.files;
   // } else {
   //   alert('invalid format!');
   // }
  }


  uploadSalarySlip2File() {
    const file = this.selectedSalarySlip2File.item(0);
    this.selectedSalarySlip1File = undefined;
    this.salarySlip2FileName = undefined;
    this.salarySlip2FileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage("addrproof",this.salarySlip2FileUpload, this.salarySlip2FileProgress);
    this.salarySlip2FileProgress.percentage = undefined;
  }


  selectAddressProofFile(event) {
    this.addressProofFileUploadProgress.percentage = 0;
    const file = event.target.files.item(0);
    this.selectedAddressProofFile = event.target.files;   
    this.addressProofFileName = this.selectedAddressProofFile[0].name;
   // if (file.type.match('image.*')) {
     // this.selectedFiles = event.target.files;
   // } else {
   //   alert('invalid format!');
   // }
  }

  uploadAddressProofFile() {
    const file = this.selectedAddressProofFile.item(0);
    this.selectedAddressProofFile = undefined;
    this.addressProofFileName = undefined;
    this.addressProofFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage("addrproof", this.addressProofFileUpload, this.addressProofFileUploadProgress);
    this.addressProofFileUploadProgress.percentage = undefined;
  }

  constructor(private msgSvc: MessageService,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private uploadService: UploadFileServiceProvider) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddrandemploymentPage');
  }

  showSalAcctBankStmtPage(){
    this.responseData = this.sendRequest();
    console.log(this.responseData.map((res :Response) => console.log(res.json())));
    this.navCtrl.push(SalacctbankstmtPage, {
      callbackResponse : this.responseData
    });
  }

  sendRequest(){
    return this.msgSvc.getMessages(); 
  }

}
