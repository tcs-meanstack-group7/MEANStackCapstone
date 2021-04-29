import { Component, OnInit } from '@angular/core';
import {LoginService} from '../emp.login.service'

@Component({
  selector: 'app-admin-delete-employee',
  templateUrl: './admin-delete-employee.component.html',
  styleUrls: ['./admin-delete-employee.component.css']
})
export class AdminDeleteEmployeeComponent implements OnInit {
  msg=""
  constructor(public empSer:LoginService) { }

  ngOnInit(): void {
  }

  deleteEmp(empRef:any){
    this.empSer.deleteEmp(empRef.empid).subscribe((result:any)=>{
      console.log(result)
      this.msg = result.Response
    },
      (error:any)=>{
        console.log(error);

      })

  }

}
