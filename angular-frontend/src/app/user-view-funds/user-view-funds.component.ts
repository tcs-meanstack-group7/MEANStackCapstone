import { Component, OnInit } from '@angular/core';
import { FundsService } from '../funds.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-view-funds',
  templateUrl: './user-view-funds.component.html',
  styleUrls: ['./user-view-funds.component.css']
})
export class UserViewFundsComponent implements OnInit {

  constructor(public router:Router,public fundsService:FundsService) { }
  funds:Number=0
  msg=""
  ngOnInit(): void {
    let id = sessionStorage.getItem("id")
    console.log(id)
    
    this.fundsService.CheckFunds(id).subscribe((result:any)=>{
      console.log(result);
      this.funds = result.funds
      this.msg=""

    },
      (error:any)=>{
        console.log(error);
        this.msg=error;
        
      })
  }

}
