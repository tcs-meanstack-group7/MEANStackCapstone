import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  constructor(public userService:UserService) { }
  msg=""
  ngOnInit(): void {
  }

  updateUser(userRef:any){
    let id = sessionStorage.getItem("id")
    let email = userRef.email;
    let password = userRef.password;
    let fname = userRef.fname;
    let lname = userRef.lname;
    let dob = userRef.dob;
    let pnumber = userRef.pnumber;
    let address = userRef.address;

    this.userService.UpdateUser({"id": id,"email": email,"password": password,"fname":fname,"lname":lname,"dob":dob,"pnumber":pnumber,"address":address})
    .subscribe((result:any)=>{
      console.log(result);
      //this.msg = "Successfully Added";
    },
      (error:any)=>{
        console.log(error);
        //this.msg = error;
      })
  }

}
