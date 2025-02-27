import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvBasicToggleComponent } from './yv-basic-toggle.component';

describe('YvBasicToggleComponent', () => {
  let component: YvBasicToggleComponent;
  let fixture: ComponentFixture<YvBasicToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvBasicToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YvBasicToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
