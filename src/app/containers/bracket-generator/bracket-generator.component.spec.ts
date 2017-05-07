import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketGeneratorComponent } from './bracket-generator.component';

describe('BracketGeneratorComponent', () => {
  let component: BracketGeneratorComponent;
  let fixture: ComponentFixture<BracketGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
