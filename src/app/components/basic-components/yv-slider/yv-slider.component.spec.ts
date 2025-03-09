
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvSliderComponent } from './yv-slider.component';

describe('YvSliderComponent', () => {
  let component: YvSliderComponent;
  let fixture: ComponentFixture<YvSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YvSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
