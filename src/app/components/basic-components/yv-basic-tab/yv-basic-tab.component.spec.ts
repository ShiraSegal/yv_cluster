import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvBasicTabComponent } from './yv-basic-tab.component';

describe('YvBasicTabComponent', () => {
  let component: YvBasicTabComponent;
  let fixture: ComponentFixture<YvBasicTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvBasicTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YvBasicTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
