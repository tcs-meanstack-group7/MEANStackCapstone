import { Component, OnInit } from '@angular/core';
import { LoginService } from '../emp.login.service';
import { Router } from '@angular/router';
import { Request } from '../request.model'
@Component({
  selector: 'app-emp-send-request',
  templateUrl: './emp-send-request.component.html',
  styleUrls: ['./emp-send-request.component.css']
})
export class EmpSendRequestComponent implements OnInit {
  Msg?:string;
  constructor(public empService:LoginService) { }


  ngOnInit(): void {
   
  }
  requestProduct(requestRef:any){
    console.log(requestRef);
    this.empService.sendRequest(requestRef).subscribe((result:string)=> {
      this.Msg=result;
    });
      this.reset();
    }
    reset(){ }
  }