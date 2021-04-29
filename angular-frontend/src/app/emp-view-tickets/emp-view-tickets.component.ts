import { Component, OnInit } from '@angular/core';
import { LoginService } from '../emp.login.service';
import { RaiseTicket } from '../employee.model';


@Component({
  selector: 'app-emp-view-tickets',
  templateUrl: './emp-view-tickets.component.html',
  styleUrls: ['./emp-view-tickets.component.css']
})
export class EmpViewTicketsComponent implements OnInit {
  tickets?:Array<RaiseTicket>
  constructor(public ticketSer:LoginService) { }

  ngOnInit(): void {
    this.ticketSer.viewTickets().subscribe(result=>this.tickets=result);

  
  }
  

}
