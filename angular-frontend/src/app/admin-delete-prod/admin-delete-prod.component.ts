import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AdminProduct } from '../model.admin'
@Component({
  selector: 'app-admin-delete-prod',
  templateUrl: './admin-delete-prod.component.html',
  styleUrls: ['./admin-delete-prod.component.css']
})
export class AdminDeleteProdComponent implements OnInit {
  deleteMsg?:string;
  productForm: any;
  constructor(public formBuilder: FormBuilder,public proService:AdminService) { }

  ngOnInit(): void {
  }
 
  deleteProd(id:any){
    console.log("ID is "+id);
    this.proService.deleteProductById(id).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }
}


