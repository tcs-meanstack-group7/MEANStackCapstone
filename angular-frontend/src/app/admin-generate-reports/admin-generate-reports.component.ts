import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funds } from '../Funds';
import { ProductService } from '../product.service';
import { GetFundsService } from '../Getfunds.service';
import { FundsService } from '../funds.service';
import { OrderService } from '../Order.service';
import { Order } from '../Order.model';
import {Product} from '../product';
import {Item} from '../item';
import {User} from '../user.model';

@Component({
  selector: 'app-admin-generate-reports',
  templateUrl: './admin-generate-reports.component.html',
  styleUrls: ['./admin-generate-reports.component.css']
})
export class AdminGenerateReportsComponent implements OnInit {
  products = new Array<Product>()
  orders = new Array<Order>()
  users = new Array<User>()
  public items: Item[] = [];
  public funds: Funds = new Funds;
  public order: Order = new Order;

  constructor(public prodService:ProductService, public orderService:OrderService) { }
  msg=""
  ngOnInit(): void {
    this.orderService.GetAllOrders().subscribe((result:any)=>{
      this.orders = result;
      console.log(result)
    },
      (error:any)=>{
        console.log(error);
        //this.msg=error;
        
      })
    /** 
    this.prodService.getAllProducts().subscribe((result:any)=>{
      this.products = result;
      console.log(result)
    },
      (error:any)=>{
        console.log(error);
      })*/
  }
}
