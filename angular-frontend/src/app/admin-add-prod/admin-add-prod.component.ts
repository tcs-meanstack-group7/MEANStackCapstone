import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AdminProduct } from '../model.admin'
@Component({
  selector: 'app-admin-add-prod',
  templateUrl: './admin-add-prod.component.html',
  styleUrls: ['./admin-add-prod.component.css']
})
export class AdminAddProdComponent implements OnInit {
  products?:Array<AdminProduct>;
 

  constructor(public router:Router, public proService:AdminService) { }
 
  ngOnInit(): void {
    this.proService.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }

  addProd(productRef:any){
    console.log(productRef);
    this.proService.storeProductDetailsInfo(productRef);
  }
 
}