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
  fname!: String;
  lname!: String;
  dob!: Date;
  pnumber!: String;
  address!: String;
  email!: String;
  password!: String;

  showSuccessMessage!: boolean;

  constructor(public validateService: ValidateService, 
    public authService: AuthService, public router:Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(form: NgForm){
    const user = {
      fname: this.fname,
      lname: this.lname,
      dob: this.dob,
      pnumber: this.pnumber,
      address: this.address,
      email: this.email,
      password: this.password
    }

    if(!this.validateService.validateRegister(user)){
      console.log('Please fill all fields');
    }
    
    if(!this.validateService.validateEmail(user.email)){
      console.log('Please fille email');
    } 

   this.authService.registerUser(form.value).subscribe(
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
  } 

  // routes user back to login page if user changes their mind
  goBackToLogin(){
    this.router.navigate(["/auser-login"]);
  }
}
