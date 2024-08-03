import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../user.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UuidService } from 'src/app/shared/services/uuid.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  isinEditMode : boolean = false

  userForm !: FormGroup

  userId !: string;
  userObj !: Iuser;
  userRole !: string;

  constructor(
    private _users : UserService,
    private _routes : ActivatedRoute,
    private _uuid : UuidService,
    private _snackBarMsg : SnackbarService
  ) { }

  ngOnInit(): void {
      this.usersFormCreate()
      this.editModeHandling()
      this.queryParamsHandling()
  }

  usersFormCreate(){
     this.userForm = new FormGroup({
        userName : new FormControl(null , [Validators.required]),
        personImg : new FormControl(null , [Validators.required]),
        userDetails : new FormControl(null , [Validators.required]),
        userRole : new FormControl(null , [Validators.required]),
     })
  }

  editModeHandling(){
    this.userId = this._routes.snapshot.params['userId']
    if(this.userId){
      this.isinEditMode = true;
      this.userObj = this._users.getUserInfo(this.userId)!
      this.userForm.patchValue(this.userObj)
    }
    else{
      this.isinEditMode = false
    }
  }

  queryParamsHandling(){
    this.userRole = this._routes.snapshot.queryParams['userRole']
    if(this.userRole === 'buyer'){
      this.userForm.disable()
    }else{
      this.userForm.enable()
    }
  }

  getControls(control :string){
    return this.userForm.get(control) as FormControl
  }

  onUserAdd(){
      if(this.userForm.valid){
        let newUser = {...this.userForm.value , userId : this._uuid.uuid()} 
        this._users.addUserInfo(newUser)
      }else{
        this._snackBarMsg.openSnackBar(`WARNING !!! ALL FIELDS ARE REQURIED`)
      }
  }

  onUserUpdate(){
      let updatedUser = {...this.userForm.value , userId : this.userId}
      this._users.updateUserInfo(updatedUser)
  }

}
