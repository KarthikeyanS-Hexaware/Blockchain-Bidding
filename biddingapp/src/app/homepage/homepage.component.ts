import { Component, OnInit, Injectable } from '@angular/core';
import { ApplicationSettings } from '../application-settings';
import { Router,ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, Headers, Response, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { searchDetails, searchDeatilsData, searchDetailsInputParam } from '../Interfaces/interface';
import { AuthenticationService } from '../Service/authentication.service';
import { WebsocketService } from '../Service/websocket.service';
import { CommonserviceService } from '../Service/commonservice.service';
import { SearchService } from '../Service/search.service'
import { debounce } from 'rxjs/operators/debounce';
import 'rxjs/add/operator/map';
import { concat } from 'rxjs/observable/concat';

declare const require: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [SearchService,WebsocketService,CommonserviceService]
})
export class HomepageComponent implements OnInit {
  model: any = {};
  sub: Subscription;
  searchDeatilsData:any; 
  data: any;
  searchdetails:any;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private searchservice: SearchService,
    private authenticationService: AuthenticationService,
    private wsCommonService: CommonserviceService) {
      
}

ngOnInit() {

}

search() {
  return this.searchservice.search(this.model.custname,this.model.ponum).subscribe(data => {
    debugger;
    //this.searchDataList(data)/*JSON.parse(data["_body"])*/
    this.searchDeatilsData = data;
  });
  
}

/*searchDataList(searchDeatilsData) {
  if (searchDeatilsData.Customername==null || searchDeatilsData.Customername=="")
  {
      alert("Please provide details");
      return;
  }
  else{
    debugger;
    localStorage.setItem('searchdetails', JSON.stringify(searchDeatilsData));
    localStorage.getItem(JSON.parse(searchDeatilsData));
    this.searchDeatilsData = searchDeatilsData.data;
    console.log(searchDeatilsData);
      //this.searchDeatilsData = JSON.stringify(searchDeatilsData.data);
         
  }
}*/


}
