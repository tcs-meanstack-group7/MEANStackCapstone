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
    },
      (error:any)=>{
        console.log(error);

      })
    //sessionStorage.setItem("token","123");
    //this.router.navigate(["employee-panel"]);
  }

  /*onRegisterSubmit(form: any){
    const user = {"fname": form.fname,"lname": form.lname,"dob": form.dob,"pnumber": form.pnumber,"address": form.address,"email": form.email,"password": form.password}


    


   this.authService.registerUser(user).subscribe(
      res => {
        this.showSuccessMessage = true;
      },
      err => {}
    )
 /**
    this.authService.registerUser(user).subscribe(data => {
      if (data.success){
        this.router.navigate(['/auser-login']);
      } else {
        console.log("Something went wrong");
        this.router.navigate(['/register']);
      }
    })**/
  

  // routes user back to login page if user changes their mind
  /*goBackToLogin(){
    this.router.navigate(["/auser-login"]);
  }*/
}
