import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedFundComponent } from './received-fund.component';

describe('ReceivedFundComponent', () => {
  let component: ReceivedFundComponent;
  let fixture: ComponentFixture<ReceivedFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceivedFundComponent]
    });
    fixture = TestBed.createComponent(ReceivedFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
