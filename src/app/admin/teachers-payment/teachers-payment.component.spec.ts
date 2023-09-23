import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersPaymentComponent } from './teachers-payment.component';

describe('TeachersPaymentComponent', () => {
  let component: TeachersPaymentComponent;
  let fixture: ComponentFixture<TeachersPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
