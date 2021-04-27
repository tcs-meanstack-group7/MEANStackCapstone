import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(public itemService:ItemService) { }

  ngOnInit(): void {
  }

// admin must create item
  createItem(shopsRef:any){
    console.log(shopsRef);
    this.itemService.createItem(shopsRef);
  }
}
