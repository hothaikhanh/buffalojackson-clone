import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopLeftComponent } from './header-top-left.component';

describe('HeaderTopLeftComponent', () => {
  let component: HeaderTopLeftComponent;
  let fixture: ComponentFixture<HeaderTopLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTopLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTopLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
