import { Component, OnInit } from '@angular/core';
import { FundsService } from '../funds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add-funds',
  templateUrl: './user-add-funds.component.html',
  styleUrls: ['./user-add-funds.component.css']
})
export class UserAddFundsComponent implements OnInit {

  constructor(public router:Router,public fundsService:FundsService) { }
  msg=""
  ngOnInit(): void {
    
  }
  addFunds(addRef:any){
    const add = addRef.add;
    const accountNumber = addRef.accountNumber;
    let id = sessionStorage.getItem("id")
    this.fundsService.AddFunds({"id": id,"add": add,"accountNumber": accountNumber}).subscribe((result:any)=>{
      console.log(result);
      this.msg = "Successfully Added";
    },
      (error:any)=>{
        console.log(error);
        //this.msg = error;
      })
  }

}
