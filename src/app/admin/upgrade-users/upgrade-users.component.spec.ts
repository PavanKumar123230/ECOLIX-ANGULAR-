import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeUsersComponent } from './upgrade-users.component';

describe('UpgradeUsersComponent', () => {
  let component: UpgradeUsersComponent;
  let fixture: ComponentFixture<UpgradeUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpgradeUsersComponent]
    });
    fixture = TestBed.createComponent(UpgradeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
