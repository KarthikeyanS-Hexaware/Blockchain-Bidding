import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BiddingInfoComponent } from './bidding-info/bidding-info.component';
import { LoginComponent } from './login/login.component';

export const routes:Routes = [

{path:'login', component:LoginComponent},
{path:'bidding-info' , component:BiddingInfoComponent},
{path:'homepage' , component:HomepageComponent},
//{path:'**' , component:LoginComponent}
{path:'',redirectTo:'/login',pathMatch:'full'}

]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);