import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[]=[];

  constructor(
    private productService: ProductService
  ) { }

  //Fetching products from product table
  ngOnInit() {
    this.productService.findAll().subscribe((res: Product[]) => {
      this.products = res;
      console.log(res);
      console.log(this.products);
    });

  }

  addToCart(product: any) {
    let item2add = new Item(product.pname,product.price) 
    product.quantity = 1;
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cart.some((p:Item) => p.pname == item2add.pname)) {
      cart.forEach((p:Item) => {
        if (p.pname == item2add.pname) {
          p.quantity += 1;
        }
      })
    }
    else {
      cart.push(item2add)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
  }

}

class Item {
  constructor(public pname:string,public price:number,public quantity:number=1) {}

}
