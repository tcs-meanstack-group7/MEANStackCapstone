import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewTicketsComponent } from './emp-view-tickets.component';

describe('EmpViewTicketsComponent', () => {
  let component: EmpViewTicketsComponent;
  let fixture: ComponentFixture<EmpViewTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpViewTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpViewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
