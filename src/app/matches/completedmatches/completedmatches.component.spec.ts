import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedmatchesComponent } from './completedmatches.component';

describe('CompletedmatchesComponent', () => {
  let component: CompletedmatchesComponent;
  let fixture: ComponentFixture<CompletedmatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedmatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
