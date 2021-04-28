import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-panel',
  templateUrl: './emp-panel.component.html',
  styleUrls: ['./emp-panel.component.css']
})
export class EmpPanelComponent implements OnInit {
  display:String=""
  constructor() { }

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

  showLogout(){
    this.display = "logout"
  }
}
