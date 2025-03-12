import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarNavigationComponent } from './slidebar-navigation.component';

describe('SlidebarNavigationComponent', () => {
  let component: SlidebarNavigationComponent;
  let fixture: ComponentFixture<SlidebarNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidebarNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidebarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
