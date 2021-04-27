//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import {Item} from '../model.item';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  updateMsg?:string;
  products?:Array<Item>
  display:String=""
  constructor(public retrieveItem:ItemService) { }

  ngOnInit(): void {
    this.retrieveItem.retrieveCartItem().subscribe(result => this.products=result)
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
  updateCartItem(){
    console.log();
  }
}
