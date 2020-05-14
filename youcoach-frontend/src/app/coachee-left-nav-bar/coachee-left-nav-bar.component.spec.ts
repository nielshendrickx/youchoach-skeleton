import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeLeftNavBarComponent } from './coachee-left-nav-bar.component';

describe('CoacheeLeftNavBarComponent', () => {
  let component: CoacheeLeftNavBarComponent;
  let fixture: ComponentFixture<CoacheeLeftNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoacheeLeftNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeLeftNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
