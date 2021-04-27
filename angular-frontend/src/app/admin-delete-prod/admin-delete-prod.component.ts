import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminProduct } from '../model.admin'
@Component({
  selector: 'app-admin-delete-prod',
  templateUrl: './admin-delete-prod.component.html',
  styleUrls: ['./admin-delete-prod.component.css']
})
export class AdminDeleteProdComponent implements OnInit {
  deleteMsg?:string;
  constructor(public proService:AdminService) { }

  ngOnInit(): void {
  }
  deleteProd(id:any){
    console.log("id is "+id);
    this.proService.deleteProductById(id).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }
}


