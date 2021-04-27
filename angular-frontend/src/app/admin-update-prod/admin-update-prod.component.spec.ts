import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateProdComponent } from './admin-update-prod.component';

describe('AdminUpdateProdComponent', () => {
  let component: AdminUpdateProdComponent;
  let fixture: ComponentFixture<AdminUpdateProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});