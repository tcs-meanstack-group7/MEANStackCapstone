import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Funds } from '../../Funds';
import { Item } from '../../item';
import { ProductService } from '../../product.service';
import { GetFundsService } from '../../Getfunds.service';
import { OrderService } from '../../Order.service';
import { Order } from '../../Order.model';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: Item[] = [];
  public funds: Funds = new Funds;
  public order: Order = new Order;

  public total: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private fundService: GetFundsService,
    private orderService: OrderService,
    private router: Router,
  ) { }

  // Products added by user are fetched from local storage
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        var item: Item = {
          product: this.productService.find(id),
          quantity: 1
        };
        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let cart= JSON.parse(localStorage.getItem('cart')||'{}');
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product.id == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    });
  }

  // For increasing the quantity of item
  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart')||'{}');
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
    }
  }

  //For removing item from cart
  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart')||'{}');
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  // Fetching value from funds and checking out appropriately if funds are sufficient
  checkout() {

    //USER ID IS FETCHED FROM SESSION STORAGE WHICH IS STORED DURING THE LOGIN 
     var userid = sessionStorage.getItem("id")

    this.fundService.GetUserFund("userid").subscribe((res :Funds) => {
      debugger;
      console.log(res);
      this.funds = res;
     
      if (this.funds.funds < this.total) {
        alert("Insufficent funds to do shooping")
      }
      else {
        this.funds.funds = this.funds.funds - this.total;
        console.log("updated funds" + this.funds.funds);
        this.fundService.Updatefunds(this.funds).subscribe((res: any) => {
          console.log(res);
        });
        this.order.Amount = this.total;
        this.order._id = this.funds._id;
        this.order.emailid = this.funds.emailid;
        this.order.status = "Order Place sucessful";
        this.orderService.PostOrderDetails(this.order).subscribe(res => {
          console.log(this.order);
          console.log(res);
          alert("Order Placed sucessfully");
          this.items = [];
          this.router.navigate(['/orders'])
        })
      }
    })
  }
}
