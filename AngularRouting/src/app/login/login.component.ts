import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginSuccess=false;
  errorMessage="";
  constructor(private _authService:AuthenticateService, private _router:Router) { }

  ngOnInit(): void {
  }
  login(loginForm){
      console.log(loginForm.value);
      this.loginSuccess=this._authService.authenticate(loginForm.value);
      if(this.loginSuccess)
        this._router.navigate([this._authService.redirectUrl]);
      else
        this.errorMessage="Invalid Credentials";
  } 
 
}
