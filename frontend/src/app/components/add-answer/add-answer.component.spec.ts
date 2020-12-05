import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswerComponent } from './add-answer.component';

describe('AddAnswerComponent', () => {
  let component: AddAnswerComponent;
  let fixture: ComponentFixture<AddAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
