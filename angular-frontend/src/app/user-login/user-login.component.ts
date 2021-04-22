import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  login(){
    //Token must store when username and password must be correct 
    //session Id or JWT (Json web Token);
    sessionStorage.setItem("token","123");
    this.router.navigate(["auser-panel"]);
  }
}
