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
  emp: any;

  constructor(private http:HttpClient) { }

  registerUser(user: any){
    //let headers = new HttpHeaders();
   // headers.append("Content-Type", "application/json");
    return this.http.post('http://localhost:9090/api/user/signUp', user);

    //, {headers: headers}).map((res: { json: () => any; }) => res.json());
  }

  registerEmp(emp: any){
    //let headers = new HttpHeaders();
   // headers.append("Content-Type", "application/json");
    return this.http.post('http://localhost:9090/api/emp/signUp', emp);
    //, {headers: headers}).map((res: { json: () => any; }) => res.json());
  }
}
