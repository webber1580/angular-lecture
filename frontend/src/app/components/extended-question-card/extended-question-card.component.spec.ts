import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedQuestionCardComponent } from './extended-question-card.component';

describe('ExtendedQuestionCardComponent', () => {
  let component: ExtendedQuestionCardComponent;
  let fixture: ComponentFixture<ExtendedQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
