import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.model';

import { RaiseTicket } from './employee.model';


@Injectable({
  providedIn: 'root'    // it is equal to provided in app.module.ts file 
})
export class LoginService {
  ipAddress:string="http://54.174.70.133:9090"
  
  constructor(public http:HttpClient) { }

  ValidateEmployee(body:any):Observable<Object> {
    return this.http.post(this.ipAddress+"/api/emp/login",body);
  }

  sendRequest(requestRef:any):any{
    return this.http.post(this.ipAddress+"/api/emp/sendRequest",requestRef,{responseType:"text"})
  }
  reviewRequest():Observable<Request[]>{
    return this.http.get<Request[]>(this.ipAddress+"/Request");
 }


  editProfile(changeRef:any):any{
    return this.http.post(this.ipAddress+"/api/emp/editProfile",changeRef,{responseType:'text'})
  }

  unlockUser(unlockRef:any):any{
    return this.http.post(this.ipAddress+"/api/emp/unlock",unlockRef,{responseType:'text'})
  }

  viewTickets():Observable<RaiseTicket[]>{
    return this.http.get<RaiseTicket[]>(this.ipAddress+"/RaiseTicket/")
  }
  deleteTickets(param:any):Observable<RaiseTicket[]>{
    console.log(param)
    return this.http.delete<RaiseTicket[]>(this.ipAddress+"/api/emp/deleteTicket/"+param)
  }
  deleteEmp(param:any):Observable<RaiseTicket[]>{
    console.log(param)
    return this.http.delete<RaiseTicket[]>(this.ipAddress+"/api/emp/deleteEmpById/"+param)
  }



  

  
}