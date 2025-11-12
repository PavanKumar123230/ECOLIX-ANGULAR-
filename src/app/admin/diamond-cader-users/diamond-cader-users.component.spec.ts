import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondCaderUsersComponent } from './diamond-cader-users.component';

describe('DiamondCaderUsersComponent', () => {
  let component: DiamondCaderUsersComponent;
  let fixture: ComponentFixture<DiamondCaderUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiamondCaderUsersComponent]
    });
    fixture = TestBed.createComponent(DiamondCaderUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
