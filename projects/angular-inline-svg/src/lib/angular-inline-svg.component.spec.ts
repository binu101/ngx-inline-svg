import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInlineSvgComponent } from './angular-inline-svg.component';

describe('AngularInlineSvgComponent', () => {
  let component: AngularInlineSvgComponent;
  let fixture: ComponentFixture<AngularInlineSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularInlineSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInlineSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
