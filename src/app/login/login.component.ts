import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;

  constructor(public af: AngularFire) { }

  login() {
    this.af.auth.login();

  }

  logout() {
    this.af.auth.logout();
  }

  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect,
    });
  }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      this.user = auth.auth;
    });
  }

}
