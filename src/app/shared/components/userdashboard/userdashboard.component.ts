import { Component, OnInit } from '@angular/core';
import { Iuser } from './user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit {

  userInfo !: Iuser[]

  constructor(
    private _users : UserService
  ) { }

  ngOnInit(): void {
    this.userInfo = this._users.fetchUserInfo()
  }

}
