import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-admin-add-employee',
  templateUrl: './admin-add-employee.component.html',
  styleUrls: ['./admin-add-employee.component.css']
})
export class AdminAddEmployeeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  register(empRef:any){
    let body = {"empId": empRef.empId,"password": empRef.password}
    this.authService.registerEmp(body).subscribe((result:any)=>{
      console.log(result)
      console.log("Employee Register Success!");
    },
      (error:any)=>{
        console.log(error);

      })
  }
}
