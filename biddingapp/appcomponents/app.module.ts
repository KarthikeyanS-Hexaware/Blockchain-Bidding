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
import { JsonpModule } from '@angular/http/src/http_module';


@NgModule({ 
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    BiddingInfoComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
