import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.setItem("token","");
    sessionStorage.setItem("id","");
    this.router.navigate(["auser-login"]);
  }

}
