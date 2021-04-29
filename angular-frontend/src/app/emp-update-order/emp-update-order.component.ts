import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Order.service';
import { Order } from '../Order.model';

@Component({
  selector: 'app-emp-update-order',
  templateUrl: './emp-update-order.component.html',
  styleUrls: ['./emp-update-order.component.css']
})
export class EmpUpdateOrderComponent implements OnInit {
  orders = new Array<Order>()
  constructor(public orderService:OrderService) { }
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
  }
  updateOrder(orderRef:any){
    let body = {"id":orderRef.id,"status":orderRef.status}
    this.orderService.UpdateOrder(body).subscribe((result:any)=>{
      this.orders = result;
      console.log(result)
      this.msg=result.Response
    },
      (error:any)=>{
        console.log(error);
        this.msg=error;
        
      })
  }

}
