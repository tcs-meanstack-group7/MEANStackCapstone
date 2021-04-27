import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  private products: Product[] = [] ;
  readonly baseURL = 'http://localhost:3000/Product';

  constructor(private http: HttpClient) {
    
    this.http.get<Product>(this.baseURL).subscribe(res => {
      console.log(res);
     
      // if(res!=null){
      // this.products.push(res[0]);
      // this.products.push(res[1]);
      // this.products.push(res[2]);
      // };

    });
  }
  

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

}
