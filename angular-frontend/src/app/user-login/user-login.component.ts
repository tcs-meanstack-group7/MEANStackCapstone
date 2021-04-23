import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {Register} from './register';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username!: String;
  password!: String;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  login(){
    //Token must store when username and password must be correct 
    //session Id or JWT (Json web Token);
    const user = {
      username: this.username,
      password: this.password
    }
    sessionStorage.setItem("token","123");
    this.router.navigate(["auser-panel"]);
  }

  // routes user to register page
  register(){
    this.router.navigate(["\register"]);
  }
}