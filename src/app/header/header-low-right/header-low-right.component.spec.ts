import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLowRightComponent } from './header-low-right.component';

describe('HeaderLowRightComponent', () => {
  let component: HeaderLowRightComponent;
  let fixture: ComponentFixture<HeaderLowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLowRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
