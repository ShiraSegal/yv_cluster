import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNavigationTabComponent } from './slider-navigation-tab.component';

describe('SliderNavigationTabComponent', () => {
  let component: SliderNavigationTabComponent;
  let fixture: ComponentFixture<SliderNavigationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderNavigationTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderNavigationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
