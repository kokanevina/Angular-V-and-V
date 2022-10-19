import { Injectable } from '@angular/core';
import { usersArray } from 'src/Data/Users';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  authenticated=false;
  userType="";
  redirectUrl="/";
  constructor() { }

  authenticate(form):boolean{
    let user=usersArray.find(user=>user.type==form.userType && user.username==form.uname && user.password==form.pass);
    if(user!=null){
      this.authenticated=true;
      this.userType=form.userType;
    }
   
    return this.authenticated;
  }
}
