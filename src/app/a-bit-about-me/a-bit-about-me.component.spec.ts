import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABitAboutMeComponent } from './a-bit-about-me.component';

describe('ABitAboutMeComponent', () => {
  let component: ABitAboutMeComponent;
  let fixture: ComponentFixture<ABitAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABitAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABitAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
