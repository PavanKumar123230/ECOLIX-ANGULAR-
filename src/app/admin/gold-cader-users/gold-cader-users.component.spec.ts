import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldCaderUsersComponent } from './gold-cader-users.component';

describe('GoldCaderUsersComponent', () => {
  let component: GoldCaderUsersComponent;
  let fixture: ComponentFixture<GoldCaderUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoldCaderUsersComponent]
    });
    fixture = TestBed.createComponent(GoldCaderUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
