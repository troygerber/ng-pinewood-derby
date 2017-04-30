import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCarComponent } from './manage-car.component';

describe('ManageCarComponent', () => {
  let component: ManageCarComponent;
  let fixture: ComponentFixture<ManageCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
