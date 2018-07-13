import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPracticesComponent } from './our-practices.component';

describe('OurPracticesComponent', () => {
  let component: OurPracticesComponent;
  let fixture: ComponentFixture<OurPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
