import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminProduct } from '../model.admin'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-update-prod',
  templateUrl: './admin-update-prod.component.html',
  styleUrls: ['./admin-update-prod.component.css']
})
export class AdminUpdateProdComponent implements OnInit {
  products?:Array<AdminProduct>;
  updateMsg?:string;
  constructor(public router:Router, public proService:AdminService)  { }

  ngOnInit(): void {
    this.proService.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }
  updatePrice(productRef:any){
    console.log(productRef);
    this.proService.updateProductPrice(productRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
 
}
