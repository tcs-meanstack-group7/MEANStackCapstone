import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

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
  username!: String;
  email!: String;
  password!: String;

  constructor(public validateService: ValidateService, public router:Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    const user = {
      fname: this.fname,
      lname: this.lname,
      dob!: this.dob,
      pnumber!: this.pnumber,
      address!: this.address,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if(!this.validateService.validateRegister(user)){
      console.log('Please fill all fields');
    }
    
    if(!this.validateService.validateEmail(user.email)){
      console.log('Please fille email');
    } 
  } 

  // routes user back to login page if user changes their mind
  goBackToLogin(){
    this.router.navigate(["auser-login"]);
  }
}
