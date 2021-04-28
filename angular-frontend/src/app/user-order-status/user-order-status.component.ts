import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Order.service';
import { Order } from '../Order.model';


@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css']
})
export class UserOrderStatusComponent implements OnInit {
  orders = new Array<Order>()
  constructor(public orderService:OrderService) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem("id")
    console.log(id)
    let body = {"id":id}
    this.orderService.GetOrders(body).subscribe((result:any)=>{
      this.orders = result;
      //this.funds = result.funds
      //this.msg=""

    },
      (error:any)=>{
        console.log(error);
        //this.msg=error;
        
      })
  }

}
