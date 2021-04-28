import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AdminProduct } from '../model.admin'

@Component({
  selector: 'app-admin-delete-employee',
  templateUrl: './admin-delete-employee.component.html',
  styleUrls: ['./admin-delete-employee.component.css']
})
export class AdminDeleteEmployeeComponent implements OnInit {
  deleteMsg?:string;
  productForm: any;
  constructor(public formBuilder: FormBuilder,public proService:AdminService) { }

  ngOnInit(): void {
  }

  deleteEmp(empId:any){
    console.log("EmpID is "+empId);

    this.proService.deleteEmpById(empId).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }
}
