import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvBasicCardComponent } from './yv-basic-card.component';

describe('YvBasicCardComponent', () => {
  let component: YvBasicCardComponent;
  let fixture: ComponentFixture<YvBasicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvBasicCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YvBasicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
