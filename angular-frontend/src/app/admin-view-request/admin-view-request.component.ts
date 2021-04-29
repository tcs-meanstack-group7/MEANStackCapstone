import { Component, OnInit } from '@angular/core';
import { LoginService } from '../emp.login.service';
import { Request } from '../request.model'

@Component({
  selector: 'app-admin-view-request',
  templateUrl: './admin-view-request.component.html',
  styleUrls: ['./admin-view-request.component.css']
})
export class AdminViewRequestComponent implements OnInit {
  p?:Array<Request>;
  constructor(public empService:LoginService) { }
  
  ngOnInit(): void {
   
    this.empService.reviewRequest().subscribe(result=>this.p=result);
     
    }

}