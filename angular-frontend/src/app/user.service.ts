import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  UpdateUser(body:any):Observable<Object> {
    return this.http.put("http://localhost:9090/api/user/editUser",body);
  }
}
