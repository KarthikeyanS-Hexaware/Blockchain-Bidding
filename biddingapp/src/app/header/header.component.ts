import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Service/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  userdetails: any;
  constructor(private router: Router,
    private authenticationService: AuthenticationService, ) {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  }
  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/Login']);
  }
}
