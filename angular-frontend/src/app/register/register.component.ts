import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showSuccessMessage!: boolean;

  constructor(public validateService: ValidateService, 
    public authService: AuthService, public router:Router) { }

  ngOnInit(): void {
  }
  register(userRef:any){
    let body = {"email": userRef.email,"password": userRef.password,"fname": userRef.fname,"lname": userRef.lname,"dob": userRef.dob,"pnumber": userRef.pnumber,"address": userRef.address}
    this.authService.registerUser(body).subscribe((result:any)=>{
      console.log(result)
      this.router.navigate(["auser-login"]);
    },
      (error:any)=>{
        console.log(error);

      })
    //sessionStorage.setItem("token","123");
    //this.router.navigate(["employee-panel"]);
  }
  goBackToLogin(){
    this.router.navigate(["/auser-login"]);
  }
}


