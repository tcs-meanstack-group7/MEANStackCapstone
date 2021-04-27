import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {
  display:String=""

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  showLogout(){
    this.display = "showLogout",    
    this.router.navigate(["index"]);
  }

}
