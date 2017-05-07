import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashTalkGeneratorComponent } from './trash-talk-generator.component';

describe('TrashTalkGeneratorComponent', () => {
  let component: TrashTalkGeneratorComponent;
  let fixture: ComponentFixture<TrashTalkGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashTalkGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashTalkGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
