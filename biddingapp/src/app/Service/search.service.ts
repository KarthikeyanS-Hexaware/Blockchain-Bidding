import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ApplicationSettings } from '../application-settings';


@Injectable()
export class SearchService {

  constructor(private httpclient: HttpClient) { }
 
  search(custname:string,ponum:number){
    let url =ApplicationSettings.ServerURL+ 'api/search';
    let userdata = {Customername:custname,PONumber:ponum};
    return this.httpclient.post(url,userdata);
               
  }

}
