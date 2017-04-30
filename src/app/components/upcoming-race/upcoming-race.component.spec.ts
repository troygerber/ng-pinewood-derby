import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingRaceComponent } from './upcoming-race.component';

describe('UpcomingRaceComponent', () => {
  let component: UpcomingRaceComponent;
  let fixture: ComponentFixture<UpcomingRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
