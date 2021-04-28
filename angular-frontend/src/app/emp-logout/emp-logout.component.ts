import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-logout',
  templateUrl: './emp-logout.component.html',
  styleUrls: ['./emp-logout.component.css']
})
export class EmpLogoutComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.setItem("token","");
    sessionStorage.setItem("id","");
    this.router.navigate(["emp-login"]);
  }

}
