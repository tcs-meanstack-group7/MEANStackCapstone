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
  updateMsg?:string;
  constructor(public proService:AdminService)  { }

  ngOnInit(): void {
    
  }
  updatePrice(productRef:any){
    console.log(productRef);
    this.proService.updateProductPrice(productRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
 
}
