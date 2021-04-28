import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
import { RaiseTicket } from '../RaiseTicket.model';

declare var M: any;

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css'],
  providers: [EmployeeService]
})
export class RaiseTicketComponent implements OnInit {

  constructor(public employeeService: EmployeeService, public router:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  //Clears the fields
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      UserEmail: "",
      Reason: ""
      
    }
  }

  //Form details are pushed to api
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.router.navigate(["auser-login"])
      });
    }
    
  }




}
