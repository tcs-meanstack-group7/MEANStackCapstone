import { Injectable } from '@angular/core';
//import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user: any){
    //let headers = new HttpHeaders();
   // headers.append("Content-Type", "application/json");
    return this.http.post('http://localhost:9090/api/auth/signup', user);
    //, {headers: headers}).map((res: { json: () => any; }) => res.json());
  }
}
