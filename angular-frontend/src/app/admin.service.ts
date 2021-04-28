import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminProduct } from './model.admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //ipAddress:string="http://34.224.8.140:9090";
  ipAddress:string="http://localhost:9090";
  constructor(public http:HttpClient) { }
//post method 1st parameter url and 2nd parameter json data. 
  storeProductDetailsInfo(productRef:any){
    this.http.post(this.ipAddress+"/product/storeProductDetails",productRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  retrieveAllProductDetails():Observable<AdminProduct[]>{
     return this.http.get<AdminProduct[]>(this.ipAddress+"/product/allProductDetails")
  }

  retrieveProductById(id:any):Observable<AdminProduct[]>{
    return this.http.get<AdminProduct[]>(this.ipAddress+"/product/retrieveProductById/"+id)
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteProductById(id:any):any{
    return this.http.delete(this.ipAddress+"/product/deleteProductById/"+id,{responseType:'text'});
  }

// delete employee
  deleteEmpById(empId:any):any{
    return this.http.delete(this.ipAddress+"/api/emp/deleteEmpById/"+empId,{responseType:'text'});
  }

  updateProductPrice(productRef:any):any{
    return this.http.put(this.ipAddress+"/product/updateProductPrice",productRef,{responseType:'text'})
  }
}