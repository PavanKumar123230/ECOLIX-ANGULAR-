import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverManagersDataComponent } from './silver-managers-data.component';

describe('SilverManagersDataComponent', () => {
  let component: SilverManagersDataComponent;
  let fixture: ComponentFixture<SilverManagersDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilverManagersDataComponent]
    });
    fixture = TestBed.createComponent(SilverManagersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
