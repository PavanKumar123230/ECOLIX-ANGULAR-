import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankUsersDataComponent } from './rank-users-data.component';

describe('RankUsersDataComponent', () => {
  let component: RankUsersDataComponent;
  let fixture: ComponentFixture<RankUsersDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankUsersDataComponent]
    });
    fixture = TestBed.createComponent(RankUsersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
