import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'    // it is equal to provided in app.module.ts file 
})
export class LoginService {

  constructor(public http:HttpClient) { }

  ValidateEmployee(body:any):Observable<Object> {
    return this.http.post("http://localhost:9090/api/emp/login",body);
  }

  sendRequest(requestRef:any){
    this.http.post("http://localhost:9090/api/emp/sendRequest",requestRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  reviewRequest(requestRef:any){
    this.http.post("http://localhost:9090/api/emp/reviewRequest",requestRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  editProfile(changeRef:any){
    this.http.post("http://localhost:9090/api/emp/editProfile",changeRef,{responseType:'text'}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  unlockUser(unlockRef:any){
    this.http.post("http://localhost:9090/api/emp/unlock",unlockRef,{responseType:'text'}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  viewTickets(requestRef:any){
    this.http.get("http://localhost:9090/api/user/viewTickets",requestRef)
  }


  

  
}