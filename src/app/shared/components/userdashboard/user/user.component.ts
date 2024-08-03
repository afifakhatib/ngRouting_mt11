import { Component, OnInit } from '@angular/core';
import { Iuser } from '../user.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId !: string ;
  userObj !: Iuser 

  constructor(
    private _users : UserService,
    private _route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
     this.getUserObj()
  }

  getUserObj(){
      this.userId = this._route.snapshot.params['userId']
      if(this.userId){
        this.userObj = this._users.getUserInfo(this.userId)!
      }
  }

  onRemoveUser(){
    let confirmation = confirm(`Are you sure ? Do you want to remove user ${this.userObj.userName}`)
    if(confirmation){
       this._users.removeUserInfo(this.userObj)
    }
  }

}
