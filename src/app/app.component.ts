import { Component } from '@angular/core';
import {Padlet} from "./shared/padlet";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./shared/authentication.service";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  constructor(private authService: AuthenticationService) {
  }

  isLoggedIn() :boolean {
    return this.authService.isLoggedIn();
  }

  getLoginLabel() : string{
    if(this.isLoggedIn()){
      return "Logout";
    } else {
      return "Login";
    }
  }

}
