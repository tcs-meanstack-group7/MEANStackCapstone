import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  display:String=""
  constructor() { }

  ngOnInit(): void {
  }

  showSendRequest(){
    this.display = "sendRequest"
  }

  showEditProfile(){
    this.display = "editProfile"
  }
  showFunds(){
    this.display = "showFunds"
  }

  addFunds(){
    this.display = "addFunds"
  }

  showLogout(){
    this.display = "showLogout"
  }
}
