import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewFundsComponent } from './user-view-funds.component';

describe('UserViewFundsComponent', () => {
  let component: UserViewFundsComponent;
  let fixture: ComponentFixture<UserViewFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
