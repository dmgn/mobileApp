import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { IdentityverificationPage } from '../identityverification/identityverification';
import { MessageService } from '../../providers/message-service/message-service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { firebaseConfig } from '../../app/firebaseconfig';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DataProvider } from '../../providers/data/data';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
//import 'rxjs/Rx';
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

  responseData : Observable<any>;
  public photos : any;
  public base64Image: string;
  public picRef : any;
  public files : any;

  constructor(private camera: Camera,  private msgSvc: MessageService, 
    private dataProvider: DataProvider,
    private uploadService: UploadFileServiceProvider,
    public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public navParams: NavParams) {
    //firebase.initializeApp(firebaseConfig);
    this.photos = [];  
    this.files = this.dataProvider.getFiles("idproof");
  }

  public frontfileName: String;
  public backfileName: String;

  selectedFrontSideFile: FileList;
  selectedBackSideFile: FileList;

  currentFileUpload: FileUpload;
  frontsidefileprogress: { percentage: number } = { percentage: 0 };
  backsidefileprogress: { percentage: number } = { percentage: 0 };

  selectFrontFile(event) {
    this.frontsidefileprogress.percentage = 0;
    const file = event.target.files.item(0);
    this.selectedFrontSideFile = event.target.files;
   
    this.frontfileName = this.selectedFrontSideFile[0].name;
   // if (file.type.match('image.*')) {
     // this.selectedFiles = event.target.files;
   // } else {
   //   alert('invalid format!');
   // }
  }

  selectBackFile(event) {
    this.backsidefileprogress.percentage = 0;
    const file = event.target.files.item(0);
    this.selectedBackSideFile = event.target.files;
   
    this.backfileName = this.selectedBackSideFile[0].name;
   // if (file.type.match('image.*')) {
     // this.selectedFiles = event.target.files;
   // } else {
   //   alert('invalid format!');
   // }
  }
 
  uploadFrontFile() {
    const file = this.selectedFrontSideFile.item(0);
    this.selectedFrontSideFile = undefined;
    this.frontfileName = undefined;
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage("idproof", this.currentFileUpload, this.frontsidefileprogress);
    this.frontsidefileprogress.percentage = undefined;
  }

  uploadBackFile() {
    const file = this.selectedBackSideFile.item(0);
    this.selectedBackSideFile = undefined;
    this.backfileName = undefined;
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage("idproof",this.currentFileUpload, this.backsidefileprogress);
    this.backsidefileprogress.percentage = undefined;
  }
/*
  addFile() {
    let inputAlert = this.alertCtrl.create({
      title: 'Store new information',
      inputs: [
        {
          name: 'info',
          placeholder: 'Lorem ipsum dolor...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Store',
          handler: data => {
            this.uploadInformation(data.info);
          }
        }
      ]
    });
    inputAlert.present();
  }

  uploadInformation(text) {
    let upload = this.dataProvider.uploadToStorage(text);
 
    // Perhaps this syntax might change, it's no error here!
    upload.then().then(res => {
        this.dataProvider.storeInfoToDatabase(res.metadata).then(() => {
        let toast = this.toastCtrl.create({
          message: 'New File added!',
          duration: 3000
        });
        toast.present();
      });
    });
  } 
*/
  

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


  deletePhotoFromFirebase(){

    console.log("Inside deletePhotoFromFirebase method")
    firebase.storage().ref('pictures').delete();
    console.log("Exiting deletePhotoFromFirebase method")
  }

  async takePhoto(){

    try{
    const options: CameraOptions = {
      quality : 50,
      targetHeight : 600,
      targetWidth : 600,
      destinationType : this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType : this.camera.MediaType.PICTURE,
      correctOrientation : true
    }
    //const result = await this.camera.getPicture(options);
    //const image = `data:image/jpeg;base64, ${result}`;
    //this.photos.push(image);
    //const pictures = firebase.storage().ref('pictures');
    //pictures.putString(image, 'data_url');

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
      const pictures = firebase.storage().ref('pictures');
      pictures.putString(this.base64Image, 'data_url');
      

    }, (err) => {
      console.error(err);
    });
    console.log( "Photos length is " + this.photos.length);
    

  }catch(e){
    console.error(e);
  }

  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: "Sure you want to delete this photo? There is NO undo!",
      message: "",
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Agree clicked");
            this.photos.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }

}
