import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Injectable } from '@angular/core';

import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  public products: Product[] = [] ;
  //readonly baseURL = 'http://localhost:9090/product/allProductDetails';
  baseURL:string="http://54.226.99.137:9090/product/allProductDetails"

  constructor(private http: HttpClient) {
    

    this.http.get<Product[]>(this.baseURL).subscribe((res : Product[]) => {
      console.log(res);
      this.products = res;
      console.log(this.products);
    });

  }
  

  findAll():Observable<Product[]>{

    var res= this.http.get<Product[]>(this.baseURL);
    return res;
  }


  find(_id: string): Product {
    return this.products[this.getSelectedIndex(_id)];
  }

  getAllProducts():Observable<Object>{
    return this.http.get<Product>(this.baseURL);
  }

  private getSelectedIndex(_id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i]._id == _id) {
        return i;
      }
    }
    return -1;
  }

}
