import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterUserComponent } from './admin-register-user.component';

describe('AdminRegisterUserComponent', () => {
  let component: AdminRegisterUserComponent;
  let fixture: ComponentFixture<AdminRegisterUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegisterUserComponent]
    });
    fixture = TestBed.createComponent(AdminRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
