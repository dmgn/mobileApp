import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { FileUpload } from './fileupload';
/*
  Generated class for the UploadFileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UploadFileServiceProvider {

  private basePath = '/files';

  constructor(private db: AngularFireDatabase) { }

  pushFileToStorage(dir: string, fileUpload: FileUpload, progress: { percentage: number }) {
    this.basePath = dir;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
    var metaInfo ;

    /*
    var url = "";
    await firebase.storage().ref().child(metainfo.fullPath).getDownloadURL().then(
        (downloadURL)=> {
         url = downloadURL;
         console.log( " downloadURL 1" + downloadURL);
         return  downloadURL;
         
       }
     );
     metainfo.url = url;
     let toSave = {
       created: metainfo.timeCreated,
       url: metainfo.url  ,
       fullPath: metainfo.fullPath,
       contentType: metainfo.contentType
     }
     return this.db.list('files').push(toSave); */

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        
      },
      (error) => {
        // fail
        console.log(error);
      },
      async () => {
        
        // success
        //fileUpload.url = url;
       // fileUpload.name = fileUpload.file.name;
        //console.log("url is " + fileUpload.url);
        //fileUpload.lastModified  = fileUpload.file.lastModified;
        fileUpload.size = fileUpload.file.size;
        fileUpload.name = fileUpload.file.name;
        fileUpload.type = fileUpload.file.type; 
       await uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;

      });
      console.log(fileUpload);
      this.saveFileData(fileUpload);
      } 
    );
  }
 
  private saveFileData(fileUpload: FileUpload) {
    console.log(fileUpload);
    this.db.list(`${this.basePath}`).push(fileUpload);
    console.log(fileUpload);
  }
 
  getFileUploads(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
 
  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }
 
  private deleteFileDatabase(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }
 
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
