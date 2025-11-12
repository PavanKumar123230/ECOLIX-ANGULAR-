import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverCaderUsersComponent } from './silver-cader-users.component';

describe('SilverCaderUsersComponent', () => {
  let component: SilverCaderUsersComponent;
  let fixture: ComponentFixture<SilverCaderUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilverCaderUsersComponent]
    });
    fixture = TestBed.createComponent(SilverCaderUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
