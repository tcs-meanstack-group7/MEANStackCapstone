import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSendRequestComponent } from './user-send-request.component';

describe('UserSendRequestComponent', () => {
  let component: UserSendRequestComponent;
  let fixture: ComponentFixture<UserSendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSendRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
