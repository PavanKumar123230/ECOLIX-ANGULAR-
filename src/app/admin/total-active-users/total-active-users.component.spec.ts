import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalActiveUsersComponent } from './total-active-users.component';

describe('TotalActiveUsersComponent', () => {
  let component: TotalActiveUsersComponent;
  let fixture: ComponentFixture<TotalActiveUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalActiveUsersComponent]
    });
    fixture = TestBed.createComponent(TotalActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
