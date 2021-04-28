import { Component, OnInit } from '@angular/core';
import { LoginService } from '../emp.login.service';
import { AdminProduct } from '../model.admin';
@Component({
  selector: 'app-admin-view-request',
  templateUrl: './admin-view-request.component.html',
  styleUrls: ['./admin-view-request.component.css']
})
export class AdminViewRequestComponent implements OnInit {
  products?:Array<AdminProduct>;
  constructor(public empService:LoginService) { }

  ngOnInit(): void {
  }
  reviewReq(requestRef:any){
    console.log(requestRef);
    this.empService.reviewRequest(requestRef);
  }
}
