import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

import { Funds } from './Funds';

@Injectable()
export class GetFundsService {
  readonly baseURL = 'http://localhost:9090/api/user/funds';

  constructor(private http: HttpClient) { }

 
// Updating the fund after the order is placed
  Updatefunds(funds: Funds): Observable<Funds>{
    return this.http.put<Funds>(this.baseURL + `/${funds._id}`, funds);
  }

  //Fetching the funds of a particular user with the help of id 
  GetUserFund(_id: string) {
   return this.http.get<Funds>(this.baseURL + `/${_id}`);
  }

}
