import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';

import { RaiseTicket } from './RaiseTicket.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: RaiseTicket={_id:"",UserEmail:"", Reason:""};
  employees: RaiseTicket[]=[];
  //readonly baseURL = 'http://localhost:9090/RaiseTicket';
  baseURL:string="http://54.174.70.133:9090/RaiseTicket"

  constructor(private http: HttpClient) { }

  //Saving raise ticket details in raise ticket table
  postEmployee(emp: RaiseTicket) {
    return this.http.post(this.baseURL,emp);
  }

  //Fetching the users who raised the ticket
  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

}
