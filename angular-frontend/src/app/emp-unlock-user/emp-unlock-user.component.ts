import { Component, OnInit } from '@angular/core';
import { LoginService } from '../emp.login.service';

@Component({
  selector: 'app-emp-unlock-user',
  templateUrl: './emp-unlock-user.component.html',
  styleUrls: ['./emp-unlock-user.component.css']
})
export class EmpUnlockUserComponent implements OnInit {

  constructor(public unlockService:LoginService) { }

  ngOnInit(): void {
  }
  unlock(unlockRef:any){
    this.unlockService.unlockUser(unlockRef);
    this.unlockService.deleteTickets(unlockRef.email).subscribe((result:any)=>{
      console.log(result)
    },
      (error:any)=>{
        console.log(error);

      })
    this.reset();
  }
  reset(){ }

}
