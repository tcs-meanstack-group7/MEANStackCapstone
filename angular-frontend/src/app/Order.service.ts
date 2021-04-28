import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Order } from './Order.model';

@Injectable()
export class OrderService {
  readonly baseURL = 'http://localhost:9090/Orders';

  constructor(private http: HttpClient) { }



  PostOrderDetails(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseURL , order);
  }

 

}
