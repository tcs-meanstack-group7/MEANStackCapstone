import { DoBootstrap, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user: { fname: any; lname: any; dob: any;
    pnumber: any; address: any; email: any; username: any; password: any; }){
    if(user.fname == undefined ||
      user.lname == undefined ||
      user.dob == undefined ||
      user.pnumber == undefined ||
      user.address == undefined ||
      user.email == undefined ||
      user.username == undefined ||
      user.password == undefined){
        return false;
      }
      else {
        return true;
      }
  }

  validateEmail(email: String) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
