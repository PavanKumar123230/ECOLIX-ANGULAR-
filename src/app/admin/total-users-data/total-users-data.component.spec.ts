import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUsersDataComponent } from './total-users-data.component';

describe('TotalUsersDataComponent', () => {
  let component: TotalUsersDataComponent;
  let fixture: ComponentFixture<TotalUsersDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalUsersDataComponent]
    });
    fixture = TestBed.createComponent(TotalUsersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
