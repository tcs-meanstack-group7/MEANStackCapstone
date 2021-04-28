//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
//import { ItemService } from '../item.service';
//import {Item} from '../model.item';
import { AdminProduct } from '../model.admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  products?:Array<AdminProduct>;
  updateMsg?:string;
  //products?:Array<Item>
  display:String=""
  constructor(public router:Router, public proService:AdminService) { }

  ngOnInit(): void {
    this.proService.retrieveAllProductDetails().subscribe(result=>this.products=result);
    //this.retrieveItem.retrieveCartItem().subscribe(result => this.products=result)
  }

  showProducts(){
    this.display = "products"
  }

  showCart(){
    this.display = "cart"
  }

  showOrderStatus(){
    this.display = "orderStatus"
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
    this.display = "logout";    
    //this.router.navigate(["index"]);
  }
  
  updateCartItem(){
    console.log();
  }
}
