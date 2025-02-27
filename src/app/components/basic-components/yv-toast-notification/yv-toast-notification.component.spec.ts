import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvToastNotificationComponent } from './yv-toast-notification.component';

describe('YvToastNotificationComponent', () => {
  let component: YvToastNotificationComponent;
  let fixture: ComponentFixture<YvToastNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvToastNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YvToastNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
