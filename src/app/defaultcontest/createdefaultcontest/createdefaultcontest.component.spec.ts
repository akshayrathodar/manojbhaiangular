import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedefaultcontestComponent } from './createdefaultcontest.component';

describe('CreatedefaultcontestComponent', () => {
  let component: CreatedefaultcontestComponent;
  let fixture: ComponentFixture<CreatedefaultcontestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedefaultcontestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedefaultcontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
