import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Funds } from '../../Funds';
import { Item } from '../../item';
import { ProductService } from '../../product.service';
import { GetFundsService } from '../../Getfunds.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: Item[] = [];
  public funds: Funds = new Funds;

  public total: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private fundService: GetFundsService
  ) { }

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

  checkout() {

    this.fundService.GetUserFund("6087f765844d7c52e8298817").subscribe(res => {
      debugger;
      console.log(res);
     
      if (this.funds.funds < this.total) {
        alert("Insufficent funds to do shooping")
      }
      else {
        this.funds.funds = this.funds.funds - this.total;
        this.fundService.Updatefunds(this.funds).subscribe((res: any) => {
          console.log(res);
        });
      }
    })
  }
}
