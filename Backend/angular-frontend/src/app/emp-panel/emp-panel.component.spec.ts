import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPanelComponent } from './emp-panel.component';

describe('EmpPanelComponent', () => {
  let component: EmpPanelComponent;
  let fixture: ComponentFixture<EmpPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
