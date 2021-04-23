import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: String;
  username!: String;
  email!: String;
  password!: String;

  constructor(public validateService: ValidateService, public router:Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
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
