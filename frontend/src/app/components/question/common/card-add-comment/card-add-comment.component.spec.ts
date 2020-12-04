import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddCommentComponent } from './card-add-comment.component';

describe('CardAddCommentComponent', () => {
  let component: CardAddCommentComponent;
  let fixture: ComponentFixture<CardAddCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAddCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
