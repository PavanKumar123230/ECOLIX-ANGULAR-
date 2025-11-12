import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferWallettoUserComponent } from './transfer-walletto-user.component';

describe('TransferWallettoUserComponent', () => {
  let component: TransferWallettoUserComponent;
  let fixture: ComponentFixture<TransferWallettoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferWallettoUserComponent]
    });
    fixture = TestBed.createComponent(TransferWallettoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
