import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'    // it is equal to provided in app.module.ts file 
})
export class UserLoginService {
  ipAddress:string="http://54.226.99.137:9090"

  constructor(public http:HttpClient) { }

  ValidateUser(body:any):Observable<Object> {

    return this.http.post(this.ipAddress+"/api/user/login",body);
  }

}

