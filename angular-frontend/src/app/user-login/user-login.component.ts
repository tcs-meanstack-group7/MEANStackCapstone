import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../user.login.service';
//import {Register} from './register';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email!: String;
  password!: String;

  constructor(public router:Router, public usrSer: UserLoginService) { }

  msg:String="";

  
  ngOnInit(): void {
  }

  login(userRef:any){
    //Token must store when username and password must be correct 
    //session Id or JWT (Json web Token);
    console.log(userRef.email)
    console.log(userRef.password)
    /**const user = {
      username: this.username,
      password: this.password
    }
    sessionStorage.setItem("token","123");
    this.router.navigate(["auser-panel"]);**/

    this.usrSer.ValidateEmployee({"email":userRef.email,"password":userRef.password}).subscribe((result:any)=>{
      console.log(result.token);
      sessionStorage.setItem("token",result.token);
      sessionStorage.setItem("id",result.user._id)
      this.router.navigate(["auser-panel"]);
    },
      (error:any)=>{
        console.log(error);
        this.msg =error.error.message;
      })
    //sessionStorage.setItem("token","123");
    //this.router.navigate(["employee-panel"]);
  }

  // routes user to register page
  register(){
    this.router.navigate(["\register"]);
  }
}