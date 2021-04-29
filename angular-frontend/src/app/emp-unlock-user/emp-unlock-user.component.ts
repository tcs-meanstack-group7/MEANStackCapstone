import { Component, OnInit } from '@angular/core';
import { LoginService } from '../emp.login.service';

@Component({
  selector: 'app-emp-unlock-user',
  templateUrl: './emp-unlock-user.component.html',
  styleUrls: ['./emp-unlock-user.component.css']
})
export class EmpUnlockUserComponent implements OnInit {
  Msg?:string;
  constructor(public unlockService:LoginService) { }

  ngOnInit(): void {
  }
  unlock(unlockRef:any){
    console.log(unlockRef);
    this.unlockService.unlockUser(unlockRef).subscribe((result:string)=> {
      this.Msg=result;
      this.reset();
    });
      
    }
    reset(){ }

  }
  
