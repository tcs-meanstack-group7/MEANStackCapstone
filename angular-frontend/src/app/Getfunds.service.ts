import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Funds } from './Funds';

@Injectable()
export class GetFundsService {
  readonly baseURL = 'http://localhost:3000/Funds';

  constructor(private http: HttpClient) { }

 

  Updatefunds(funds: Funds): Observable<Funds>{
    return this.http.put<Funds>(this.baseURL + `/${funds._id}`, funds);
  }

  GetUserFund(_id: string) {
   return this.http.get(this.baseURL + `/${_id}`);
  }

}
