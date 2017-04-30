import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompetitorComponent } from './manage-competitor.component';

describe('ManageCompetitorComponent', () => {
  let component: ManageCompetitorComponent;
  let fixture: ComponentFixture<ManageCompetitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompetitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
