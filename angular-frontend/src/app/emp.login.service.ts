import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaiseTicket } from './employee.model';


@Injectable({
  providedIn: 'root'    // it is equal to provided in app.module.ts file 
})
export class LoginService {

  constructor(public http:HttpClient) { }

  ValidateEmployee(body:any):Observable<Object> {
    return this.http.post("http://localhost:9090/api/emp/login",body);
  }

  sendRequest(requestRef:any):any{
    return this.http.post("http://localhost:9090/api/emp/sendRequest",requestRef,{responseType:"text"})
  }
  reviewRequest(requestRef:any){
    this.http.post("http://localhost:9090/api/emp/reviewRequest",requestRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  editProfile(changeRef:any):any{
    return this.http.post("http://localhost:9090/api/emp/editProfile",changeRef,{responseType:'text'})
  }

  unlockUser(unlockRef:any):any{
    return this.http.post("http://localhost:9090/api/emp/unlock",unlockRef,{responseType:'text'})
  }

  viewTickets():Observable<RaiseTicket[]>{
    return this.http.get<RaiseTicket[]>("http://localhost:9090/RaiseTicket/")
  }


  

  
}