import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepLoginComponent } from './multi-step-login.component';

describe('MultiStepLoginComponent', () => {
  let component: MultiStepLoginComponent;
  let fixture: ComponentFixture<MultiStepLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiStepLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
