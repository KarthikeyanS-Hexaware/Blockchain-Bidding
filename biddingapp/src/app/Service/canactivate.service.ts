import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class CanactivateService {
  constructor(private router: Router) { }
  canActivate() {
    var userdetails = JSON.parse(localStorage.getItem("userdetails"));

    if (userdetails.Firstname != null && userdetails.Firstname != "") {
      return true;
    }
    this.router.navigate(['/Login']);
    return false;
  }

}