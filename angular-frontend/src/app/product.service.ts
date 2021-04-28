import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Injectable } from '@angular/core';

import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  public products: Product[] = [] ;
  readonly baseURL = 'http://localhost:9090/Product';

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
