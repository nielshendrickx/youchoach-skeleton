import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyBecomeCoachComponent } from './apply-become-coach.component';

describe('ApplyBecomeCoachComponent', () => {
  let component: ApplyBecomeCoachComponent;
  let fixture: ComponentFixture<ApplyBecomeCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyBecomeCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyBecomeCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
