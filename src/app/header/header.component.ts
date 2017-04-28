import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router'

@Component({
  selector: 'pd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth != null) {
        this.user = auth.auth;
      }
    });
  }

  login() {
    this.router.navigate(['/login'])
  }

  logout() {
    this.af.auth.logout().then(suceess => {
      this.user = null;
      this.router.navigate(['/'])
    });
  }

  ngOnInit() {
  }

}
