import { Component, OnInit } from '@angular/core';
import { LoginService } from '../emp.login.service';

@Component({
  selector: 'app-emp-send-request',
  templateUrl: './emp-send-request.component.html',
  styleUrls: ['./emp-send-request.component.css']
})
export class EmpSendRequestComponent implements OnInit {

  constructor(public empService:LoginService) { }

  ngOnInit(): void {
  }
  requestProduct(requestRef:any){
    console.log(requestRef);
    this.empService.sendRequest(requestRef);
    this.reset();
  }
  reset(){ }

}
