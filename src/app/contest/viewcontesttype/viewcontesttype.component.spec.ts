import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontesttypeComponent } from './viewcontesttype.component';

describe('ViewcontesttypeComponent', () => {
  let component: ViewcontesttypeComponent;
  let fixture: ComponentFixture<ViewcontesttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcontesttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontesttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
