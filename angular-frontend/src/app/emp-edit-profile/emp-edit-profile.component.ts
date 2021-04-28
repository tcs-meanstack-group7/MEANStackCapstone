import { Component, OnInit } from '@angular/core';
import { LoginService } from '../emp.login.service';

@Component({
  selector: 'app-emp-edit-profile',
  templateUrl: './emp-edit-profile.component.html',
  styleUrls: ['./emp-edit-profile.component.css']
})
export class EmpEditProfileComponent implements OnInit {

  constructor(public employeeSer:LoginService) { }

  ngOnInit(): void {
  }
  changePass(changeRef:any){
    console.log(changeRef);
    this.employeeSer.editProfile(changeRef);
    this.reset();
  }
  reset(){ }
}
