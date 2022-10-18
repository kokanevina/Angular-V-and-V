import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(loginForm){
      console.log(loginForm.value);
      console.log(loginForm.value.uname);
      console.log(loginForm.value.pass);
      console.log(loginForm.value.userType);
  }
}
