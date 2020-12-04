import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewQuestionCardComponent } from './preview-question-card.component';

describe('PreviewQuestionCardComponent', () => {
  let component: PreviewQuestionCardComponent;
  let fixture: ComponentFixture<PreviewQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
