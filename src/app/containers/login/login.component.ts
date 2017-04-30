import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: any;

  constructor(public af: AngularFire, private router: Router) { }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
    }).then(sucess => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if (auth != null) {
        this.user = auth.auth;
      }

    });
  }

}
