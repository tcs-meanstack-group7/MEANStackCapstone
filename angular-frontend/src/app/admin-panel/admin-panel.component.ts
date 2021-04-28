import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(["index"]);
  }
  addProduct(){
    this.router.navigate(["admin-add-prod"]);
  }
  deleteProduct(){
    this.router.navigate(["admin-delete-prod"]);
  }
  updateProduct(){
    this.router.navigate(["admin-update-prod"]);
  }
  viewReq(){
    this.router.navigate(["admin-view-request"]);
  }
}
