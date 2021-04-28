import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  admin(){
    this.router.navigate(["admin-login"]);
  }
  employee(){
    this.router.navigate(["emp-login"]);
  }

  user(){
    this.router.navigate(["auser-login"]);
  }

}
