import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLowLeftComponent } from './header-low-left.component';

describe('HeaderLowLeftComponent', () => {
  let component: HeaderLowLeftComponent;
  let fixture: ComponentFixture<HeaderLowLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLowLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLowLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
