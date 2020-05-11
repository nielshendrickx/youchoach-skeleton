import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeNavBarComponent } from './coachee-nav-bar.component';

describe('CoacheeNavBarComponent', () => {
  let component: CoacheeNavBarComponent;
  let fixture: ComponentFixture<CoacheeNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoacheeNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
