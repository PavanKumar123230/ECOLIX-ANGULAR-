import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayActiveUsersComponent } from './today-active-users.component';

describe('TodayActiveUsersComponent', () => {
  let component: TodayActiveUsersComponent;
  let fixture: ComponentFixture<TodayActiveUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayActiveUsersComponent]
    });
    fixture = TestBed.createComponent(TodayActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
