import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import 'rxjs/Rx';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private url : String;

  private basePath = '/files';

  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) {
    console.log('Hello DataProvider Provider');
  }

  
  getFiles(dir) {
    let ref = this.db.list(dir);
    return ref.snapshotChanges().map(changes => {
      return changes.map(c =>
                              ({ key: c.payload.key,
                                  ... c.payload.val()
                              })
                        );
      //changes.map((changes:Response) => <any[]>changes.json());

    });
  }

 
  uploadToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;
 
    return this.afStorage.ref(`files/${newName}`).putString(information);

    
 }

  async storeInfoToDatabase(metainfo) {
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
    return this.db.list('files').push(toSave);
  }

  deleteFile(file) {
    let key = file.key;
    let storagePath = file.fullPath;
    let ref = this.db.list('files');
    ref.remove(key);
    return this.afStorage.ref(storagePath).delete();
  }
}
