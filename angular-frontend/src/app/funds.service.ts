import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  ipAddress:string="http://54.226.99.137:9090"

  constructor(public http:HttpClient) { }

  CheckFunds(id:any):Observable<Object> {
    return this.http.get(this.ipAddress+"/api/user/funds/"+id);
  }
  AddFunds(body:any):Observable<Object> {
    return this.http.put(this.ipAddress+"/api/user/addFunds",body);
  }
  Spend(body:any):Observable<Object> {
    console.log(body)
    return this.http.put(this.ipAddress+"/api/user/spend",body);
  }
}
