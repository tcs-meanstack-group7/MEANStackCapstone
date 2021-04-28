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
    debugger;
    this.productService.findAll().subscribe((res: Product[]) => {
      this.products = res;
      console.log(res);
      console.log(this.products);
    });
  }


}
