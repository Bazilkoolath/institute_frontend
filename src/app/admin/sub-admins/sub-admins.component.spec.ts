import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminsComponent } from './sub-admins.component';

describe('SubAdminsComponent', () => {
  let component: SubAdminsComponent;
  let fixture: ComponentFixture<SubAdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubAdminsComponent]
    });
    fixture = TestBed.createComponent(SubAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
