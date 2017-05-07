import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardGeneratorComponent } from './award-generator.component';

describe('AwardGeneratorComponent', () => {
  let component: AwardGeneratorComponent;
  let fixture: ComponentFixture<AwardGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
