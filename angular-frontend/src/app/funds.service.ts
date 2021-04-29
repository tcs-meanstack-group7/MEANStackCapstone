import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(public http:HttpClient) { }

  CheckFunds(id:any):Observable<Object> {
    return this.http.get("http://localhost:9090/api/user/funds/"+id);
  }
  AddFunds(body:any):Observable<Object> {
    return this.http.put("http://localhost:9090/api/user/addFunds",body);
  }
  Spend(body:any):Observable<Object> {
    console.log(body)
    return this.http.put("http://localhost:9090/api/user/spend",body);
  }
}
