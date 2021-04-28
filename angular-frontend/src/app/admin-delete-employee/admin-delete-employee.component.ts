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

  constructor() { }

  ngOnInit(): void {
  }

}
