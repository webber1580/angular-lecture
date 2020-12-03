import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedCardCommentComponent } from './extended-card-comment.component';

describe('ExtendedCardCommentComponent', () => {
  let component: ExtendedCardCommentComponent;
  let fixture: ComponentFixture<ExtendedCardCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedCardCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedCardCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
