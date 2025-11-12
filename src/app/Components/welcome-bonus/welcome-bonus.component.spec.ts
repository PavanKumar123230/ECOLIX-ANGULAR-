import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBonusComponent } from './welcome-bonus.component';

describe('WelcomeBonusComponent', () => {
  let component: WelcomeBonusComponent;
  let fixture: ComponentFixture<WelcomeBonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeBonusComponent]
    });
    fixture = TestBed.createComponent(WelcomeBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
