import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdefaultcontestComponent } from './viewdefaultcontest.component';

describe('ViewdefaultcontestComponent', () => {
  let component: ViewdefaultcontestComponent;
  let fixture: ComponentFixture<ViewdefaultcontestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdefaultcontestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdefaultcontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
