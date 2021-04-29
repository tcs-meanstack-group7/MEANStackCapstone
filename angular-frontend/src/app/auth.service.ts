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
  ipAddress:string="http://54.174.70.133:9090"

  constructor(private http:HttpClient) { }

  registerUser(user: any){
    //let headers = new HttpHeaders();
   // headers.append("Content-Type", "application/json");
    return this.http.post(this.ipAddress+'/api/user/signUp', user);

    //, {headers: headers}).map((res: { json: () => any; }) => res.json());
  }

  registerEmp(emp: any){
    //let headers = new HttpHeaders();
   // headers.append("Content-Type", "application/json");
    return this.http.post(this.ipAddress+'/api/emp/signUp', emp);
    //, {headers: headers}).map((res: { json: () => any; }) => res.json());
  }
}
