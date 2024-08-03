import { Injectable } from '@angular/core';
import { Iuser } from '../components/userdashboard/user.interface';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersArr : Iuser[]  = [
    {
      userName: 'Bob Smith',
      userId: '1',
      personImg:
        'https://photocatchthemoment.com/wp-content/uploads/2016/01/business_headshot_linkedIn_profile-picture_Dublin_Rafael-Photography.jpg',
      userDetails:
        'Bob Smith is a seasoned project manager with a background in IT consulting. He has successfully led multiple teams in delivering complex software solutions. Bob enjoys traveling and playing tennis during weekends. He is passionate about mentoring young professionals and is involved in organizing tech meetups in his community. Bob is also an amateur chef and enjoys experimenting with new recipes. He volunteers at a local shelter, cooking meals for the homeless. Bob is an advocate for sustainable living and volunteers for environmental clean-up drives in his neighborhood.',
      userRole: 'admin',
    },
    {
      userName: 'Alice Johnson',
      userId: '2',
      personImg: 'https://wallpapercave.com/wp/wp7479519.jpg',
      userDetails:
        'Alice Johnson is a passionate software engineer with 5 years of experience in developing web applications. She specializes in front-end technologies like Angular and React. Alice loves photography and hiking in her free time. She is currently learning mobile app development and is excited about the possibilities of creating innovative mobile applications. Alice also volunteers at local coding bootcamps to mentor aspiring developers. In addition to her technical skills, Alice is fluent in Spanish and has a keen interest in learning new languages. She is an advocate for gender diversity in tech and actively participates in initiatives promoting women in STEM.',
      userRole: 'admin',
    },

    {
      userName: 'Charlie Brown',
      userId: '3',
      personImg:
        'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
      userDetails:
        'Charlie Brown is a creative designer with a passion for user experience (UX) and user interface (UI) design. He has worked on various mobile and web applications, focusing on creating intuitive and visually appealing interfaces. Charlie is also an advocate for accessibility in design and regularly contributes to open-source projects that promote inclusive design practices. In his spare time, Charlie enjoys playing the guitar and composing music. He is an avid cyclist and participates in charity rides to raise funds for environmental causes. Charlie volunteers at a local art therapy center, helping children express themselves through art.',
      userRole: 'buyer',
    },
    {
      userName: 'Diana Martinez',
      userId: '4',
      personImg:
        'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland.-1030x1030.jpg',
      userDetails:
        'Diana Martinez is a skilled photographer specializing in portrait and event photography. She captures moments that tell stories and evoke emotions. Diana is also passionate about traveling and exploring different cultures. She volunteers her photography skills for non-profit organizations, documenting their impactful work. Diana is a certified scuba diver and enjoys underwater photography. She is learning to play the piano as a hobby and volunteers as a photography instructor for underprivileged youth in her community.',
      userRole: 'buyer',
    },
    {
      userName: 'Frank Wilson',
      userId: '5',
      personImg:
        'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg',
      userDetails:
        'Frank Wilson is a cheerful customer support specialist known for his problem-solving skills and friendly demeanor. He has a knack for understanding customer needs and providing effective solutions. Frank enjoys playing guitar and volunteering in his community. He is passionate about environmental conservation and actively participates in local clean-up initiatives. Frank is also a certified yoga instructor and conducts weekly yoga classes for his colleagues. He is an advocate for mental health awareness and promotes mindfulness practices. Frank is learning to speak French and hopes to visit France in the near future.',
      userRole: 'admin',
    },
  ]

  constructor(
    private _router : Router,
    private  _snackbarMsg : SnackbarService
  ) { }

  fetchUserInfo(){
    return this.usersArr
  }

  getUserInfo(userId : string){
    return this.usersArr.find(user => user.userId === userId)
  }

  addUserInfo(newUser : Iuser){
    this.usersArr.push(newUser);
    this._router.navigate(['/users'])
    this._snackbarMsg.openSnackBar(`New user ${newUser.userName} added successfully!!`)
  }

  updateUserInfo(updatedUser : Iuser){
    let getUpdateIndex = this.usersArr.findIndex(user => user.userId === updatedUser.userId)
    let prevObj = this.usersArr[getUpdateIndex]
    this.usersArr[getUpdateIndex] = updatedUser
    this._router.navigate(['/users'])
    this._snackbarMsg.openSnackBar(`User ${prevObj.userName} is updated to ${updatedUser.userName} successfully!!`)
  }

  removeUserInfo(userObj : Iuser){
      let getRemoveIndex = this.usersArr.findIndex(user => user.userId === userObj.userId)
      this.usersArr.splice(getRemoveIndex , 1)
      this._router.navigate(['/users'])
    this._snackbarMsg.openSnackBar(`User ${userObj.userName} remove successfully!!`)

  }
}
