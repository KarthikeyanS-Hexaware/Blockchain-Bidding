import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BiddingInfoComponent } from './bidding-info/bidding-info.component';
import {Router} from  '@angular/router/src/router';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { LoginService } from './Service/login.service';
import { WebsocketService } from './Service/websocket.service';
import { SearchService } from './Service/search.service';
import { CommonserviceService } from './Service/commonservice.service';
import { LessorDataComponent } from './lessor-data/lessor-data.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationService } from './Service/authentication.service';
import { NotificationService } from './Service/notification.service';
import { CanactivateService } from './Service/canactivate.service';
//import { JsonDatePipe } from './json-date.pipe';
//import { DataService } from './core/data.service';
//import { SearchComponent } from './search/search.component';



@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BiddingInfoComponent,
    LoginComponent,
    HomepageComponent,
    LessorDataComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
   // RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [DatePipe,LoginService,WebsocketService,AuthenticationService,CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
