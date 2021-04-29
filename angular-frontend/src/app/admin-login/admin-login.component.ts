import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  msg:string="";
  loginRef=new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkAdmin() {
    console.log(this.loginRef.value);   // all value 
    let user1 = this.loginRef.get("user")?.value;  // get specific control value. 
    let pass1 = this.loginRef.get("pass")?.value;
    //console.log(user1+" "+pass1);
    if(user1=="token" && pass1=="123"){
      this.msg = "Successfully Login!"
    //Token must store when username and password must be correct 
    //session Id or JWT (Json web Token);
      sessionStorage.setItem("token","123");
      this.router.navigate(["admin-panel"]);
    }else {
      this.msg = "Incorrect Login! please check your Username/Password";
    }
  }
  index(){
    this.router.navigate(["index"]);
  }
}
