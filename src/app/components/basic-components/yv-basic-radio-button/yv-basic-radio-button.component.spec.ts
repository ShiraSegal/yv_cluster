import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvBasicRadioButtonComponent } from './yv-basic-radio-button.component';

describe('YvBasicRadioButtonComponent', () => {
  let component: YvBasicRadioButtonComponent;
  let fixture: ComponentFixture<YvBasicRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvBasicRadioButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YvBasicRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
