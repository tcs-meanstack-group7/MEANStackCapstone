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

@Component({
  selector: 'app-admin-generate-reports',
  templateUrl: './admin-generate-reports.component.html',
  styleUrls: ['./admin-generate-reports.component.css']
})
export class AdminGenerateReportsComponent implements OnInit {
  products = new Array<Product>()
  orders = new Array<Order>()
  public items: Item[] = [];
  public funds: Funds = new Funds;
  public order: Order = new Order;

  constructor(public prodService:ProductService) { }
  msg=""
  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe((result:any)=>{
      this.products = result;
      console.log(result)
    },
      (error:any)=>{
        console.log(error);
      })
  }
}
