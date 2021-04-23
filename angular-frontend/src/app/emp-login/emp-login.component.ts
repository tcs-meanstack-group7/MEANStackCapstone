import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../emp.login.service';




@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  constructor(public router:Router, public empSer:LoginService) { }
  msg:String="";
  ngOnInit(): void {
  }
  
  login(userRef:any){
    console.log(userRef._id)
    console.log(userRef.password)
    this.empSer.ValidateEmployee({"_id":userRef._id,"password":userRef.password}).subscribe((result:any)=>{
      console.log(result.token);
      sessionStorage.setItem("token",result.token);
      this.router.navigate(["employee-panel"]);
    },
      (error:any)=>{
        console.log(error);
        this.msg =error.error.message;
      
      })
    //sessionStorage.setItem("token","123");
    //this.router.navigate(["employee-panel"]);
  }

}
