import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { RaiseTicket } from './RaiseTicket.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: RaiseTicket={_id:"",UserEmail:"", Reason:""};
  employees: RaiseTicket[]=[];
  readonly baseURL = 'http://localhost:3000/RaiseTicket';

  constructor(private http: HttpClient) { }

  postEmployee(emp: RaiseTicket) {
    return this.http.post(this.baseURL,emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  //putEmployee(emp: Employee) {
  //  return this.http.put(this.baseURL+  `/${emp._id}`, emp);
  //}

  //deleteEmployee(_id: string) {
  //  return this.http.delete(this.baseURL + `/${_id}`);
  //}

}
