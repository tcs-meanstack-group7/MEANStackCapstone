import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'    // it is equal to provided in app.module.ts file 
})
export class LoginService {

  constructor(public http:HttpClient) { }

  ValidateEmployee(body:any):Observable<Object> {
    return this.http.post("http://localhost:9090/api/auth/login",body);
  }
}

