import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSendRequestComponent } from './emp-send-request.component';

describe('EmpSendRequestComponent', () => {
  let component: EmpSendRequestComponent;
  let fixture: ComponentFixture<EmpSendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSendRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
