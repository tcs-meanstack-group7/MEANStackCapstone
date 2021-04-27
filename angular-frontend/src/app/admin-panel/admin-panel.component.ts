import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ValidateService } from '../validate.service';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  empId!: String;
  password!: String;
  showSuccessMessage!: boolean;

  constructor(public validateService: ValidateService, 
    public authService: AuthService, public itemService:ItemService,public router:Router) { }

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

// admin must create item
  createItem(shopsRef:any){
    console.log(shopsRef);
    this.itemService.createItem(shopsRef);
  }

  empRegisterSubmit(form: NgForm){
    const emp = {
      empId: this.empId,
      password: this.password
    }

    if(!this.validateService.validateEmpRegister(emp)){
      console.log('Please fill all fields');
    }
    /** 
    if(!this.validateService.validateId(emp.empId)){
      console.log('Please fille EmpID');
    } **/

    this.authService.registerEmp(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
      },
      err => {}
    )
  }
}
