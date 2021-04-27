import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteProdComponent } from './admin-delete-prod.component';

describe('AdminDeleteProdComponent', () => {
  let component: AdminDeleteProdComponent;
  let fixture: ComponentFixture<AdminDeleteProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
