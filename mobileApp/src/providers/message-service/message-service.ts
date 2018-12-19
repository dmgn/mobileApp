import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageService {

  private url: string = "https://jsonplaceholder.typicode.com/todos/1";

  response: Observable<any>;

  constructor(private http: HttpClient) {
    console.log('Hello MessageServiceProvider Provider');
  }

  getMessages(){
    this.response = this.http.get(this.url);
    return this.response;
    //.do((res :Response) => console.log(res))
  }

  private logResponse(res: Response){
    console.log(res);
  }
/**
  private extractData(res: Response){
    return res.json ;
  }*/
}
