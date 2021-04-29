import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-panel',
  templateUrl: './emp-panel.component.html',
  styleUrls: ['./emp-panel.component.css']
})
export class EmpPanelComponent implements OnInit {
  display:String=""
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  showSendRequest(){
    this.display = "sendRequest"
  }

  showUpdateOrder(){
    this.display = "updateOrder"
  }

  showUnlockUser(){
    this.display = "unlockUser"
  }

  showEditProfile(){
    this.display = "editProfile"
  }

  logout(){
    sessionStorage.setItem("token","");
    sessionStorage.setItem("id","");
    this.router.navigate(["emp-login"]);
  }
}
