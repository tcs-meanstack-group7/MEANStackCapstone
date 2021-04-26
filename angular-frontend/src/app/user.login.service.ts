import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'    // it is equal to provided in app.module.ts file 
})
export class LoginService {

  constructor(public http:HttpClient) { }

  ValidateUser(body:any):Observable<Object> {
    return this.http.post("http://localhost:9090/api/auth/login",body);
  }
}

