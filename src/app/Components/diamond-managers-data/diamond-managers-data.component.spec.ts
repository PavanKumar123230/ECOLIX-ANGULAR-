import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondManagersDataComponent } from './diamond-managers-data.component';

describe('DiamondManagersDataComponent', () => {
  let component: DiamondManagersDataComponent;
  let fixture: ComponentFixture<DiamondManagersDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiamondManagersDataComponent]
    });
    fixture = TestBed.createComponent(DiamondManagersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
