import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawUsersListComponent } from './withdraw-users-list.component';

describe('WithdrawUsersListComponent', () => {
  let component: WithdrawUsersListComponent;
  let fixture: ComponentFixture<WithdrawUsersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawUsersListComponent]
    });
    fixture = TestBed.createComponent(WithdrawUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
