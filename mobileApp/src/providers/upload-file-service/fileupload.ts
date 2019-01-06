import { DateTime } from "ionic-angular";

export class FileUpload {
 
    key: string;
    name: string;
    url: string;
    file: File;
    size: number;
    lastModified: number;
    type: string;
   
    constructor(file: File) {
      this.file = file;
    }
  }