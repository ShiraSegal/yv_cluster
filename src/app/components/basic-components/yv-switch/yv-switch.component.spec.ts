import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvSwitchComponent } from './yv-switch.component';

describe('YvSwitchComponent', () => {
  let component: YvSwitchComponent;
  let fixture: ComponentFixture<YvSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YvSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
