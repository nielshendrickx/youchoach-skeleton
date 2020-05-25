import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProfileChangeComponent } from './request-profile-change.component';

describe('RequestProfileChangeComponent', () => {
  let component: RequestProfileChangeComponent;
  let fixture: ComponentFixture<RequestProfileChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestProfileChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestProfileChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
