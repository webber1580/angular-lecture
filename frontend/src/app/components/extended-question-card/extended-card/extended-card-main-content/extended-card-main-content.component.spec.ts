import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedCardMainContentComponent } from './extended-card-main-content.component';

describe('ExtendedCardMainContentComponent', () => {
  let component: ExtendedCardMainContentComponent;
  let fixture: ComponentFixture<ExtendedCardMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedCardMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedCardMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
