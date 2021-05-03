import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './model.item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  ipAddress:string="http://54.174.70.133:9090"
  deleteById(id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public http:HttpClient) { }
//post method 1st parameter url and 2nd parameter json data. 
  createItem(shopsRef:any){
    this.http.post(this.ipAddress+"/api/user/createItem",shopsRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

// retrieves items the admin added
  retrieveCartItem():Observable<Item[]>{
     return this.http.get<Item[]>(this.ipAddress+"/api/user/retrieveItemDetails")
  }

  retrieveProductById(id:any):Observable<Item[]>{
    return this.http.get<Item[]>(this.ipAddress+"/class/retrieveClassById/"+id)
  }
/** 
  //by default all HttpClient method return type is observable with json format data. 
  deleteClassById(id:any):any{
    return this.http.delete("http://localhost:4000/class/deleteById/"+id,{responseType:'text'});
  }

  updateDetails(classRef:any):any{
    return this.http.put("http://localhost:4000/class/updateClassDetails",classRef,{responseType:'text'})
  }
  **/
}
