import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { User } from '../shared/user';

@Component({
  selector: 'kw-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    public af: AngularFire
  ) { }

  ngOnInit() {
  }

  login() {
    this.af.auth.login()
      .then(user => {
        let parsedUser = new User(user.auth);
        this.af.database.object(`users/${parsedUser.uid}`).set(parsedUser);
      });
  }

  logout() {
    this.af.auth.logout();
  }

}
