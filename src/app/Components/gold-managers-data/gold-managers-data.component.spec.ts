import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldManagersDataComponent } from './gold-managers-data.component';

describe('GoldManagersDataComponent', () => {
  let component: GoldManagersDataComponent;
  let fixture: ComponentFixture<GoldManagersDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoldManagersDataComponent]
    });
    fixture = TestBed.createComponent(GoldManagersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
