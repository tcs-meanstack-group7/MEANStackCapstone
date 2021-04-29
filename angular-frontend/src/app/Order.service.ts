import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Order } from './Order.model';

@Injectable()
export class OrderService {
  //readonly baseURL = 'http://localhost:9090/Orders';
  baseURL:string="http://54.174.70.133:9090/Orders"
  

  constructor(private http: HttpClient) { }



  PostOrderDetails(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseURL , order);
  }

  GetOrders(body:any):Observable<Object>{
    return this.http.post<Order>(this.baseURL+"/getOrders" , body);
  }

  GetAllOrders():Observable<Object>{
    return this.http.get<Order>(this.baseURL);
  }

  UpdateOrder(body:any):Observable<Object>{
    console.log(body)
    return this.http.put<Order>(this.baseURL+"/update",body);
  }
 

}
