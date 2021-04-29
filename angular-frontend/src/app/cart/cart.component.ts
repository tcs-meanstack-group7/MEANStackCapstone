import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Funds } from '../Funds';
import { ProductService } from '../product.service';
import { GetFundsService } from '../Getfunds.service';
import { FundsService } from '../funds.service';
import { OrderService } from '../Order.service';
import { Order } from '../Order.model';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: Item[] = [];
  public funds: Funds = new Funds;
  public order: Order = new Order;
  msg=""

  public total: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private fundService: FundsService,
    private orderService: OrderService,
    private router: Router,
     
  ) { }

  // Products added by user are fetched from local storage
  ngOnInit() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.forEach((p:Item) => {
      this.items.push(p)
      this.total+=(p.quantity*p.price);
    })
  }

  // For increasing the quantity of item


  //For removing item from cart
  remove(item: any) {
    console.log(item)
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].pname == item.pname) {
        this.total -= this.items[i].price*this.items[i].quantity
        this.items.splice(i, 1);
      }
    }
    localStorage.setItem('cart',JSON.stringify(this.items))
  }

  // Fetching value from funds and checking out appropriately if funds are sufficient
  checkout() {

    //USER ID IS FETCHED FROM SESSION STORAGE WHICH IS STORED DURING THE LOGIN 
     var userid = sessionStorage.getItem("id")

     this.fundService.CheckFunds(userid).subscribe((res :any) => {
      //debugger;
      console.log(res);
      this.funds = res;
     
      if (this.funds.funds < this.total) {
        this.msg="Insufficent Funds"
      }
      else {
        this.funds.funds = this.funds.funds - this.total;
        console.log("updated funds" + this.funds.funds);
        this.fundService.Spend({"id": userid,"amount": this.total}).subscribe((res: any) => {
          console.log(res);
        });
        console.log("here")
        console.log(this.funds)
        this.order.amount = this.total;
        this.order.id = userid||"";
        this.order.emailid = this.funds.emailid;
        this.order.status = "Order Placed Sucessfully";
        this.orderService.PostOrderDetails(this.order).subscribe(res => {
          console.log(this.order);
          console.log(res);
          this.msg="Order Placed sucessfully";
          this.items = []
          this.total = 0;
        })
      }
    })

    /*
    this.fundService.GetUserFund(userid).subscribe((res :Funds) => {
      //debugger;
      console.log(res);
      this.funds = res;
     
      if (this.funds.funds < this.total) {
        this.msg="Insufficent funds to do shooping"
      }
      else {
        this.funds.funds = this.funds.funds - this.total;
        console.log("updated funds" + this.funds.funds);
        this.fundService.Updatefunds(this.funds).subscribe((res: any) => {
          console.log(res);
        });
        this.order.amount = this.total;
        this.order._id = this.funds._id;
        this.order.emailid = this.funds.emailid;
        this.order.status = "Order Place sucessful";
        this.orderService.PostOrderDetails(this.order).subscribe(res => {
          console.log(this.order);
          console.log(res);
          this.msg="Order Placed sucessfully";
          this.items = [];
        })
      }
    })*/
  }
}

class Item {
  constructor(public pname:string,public price:number,public quantity:number=1) {}

}