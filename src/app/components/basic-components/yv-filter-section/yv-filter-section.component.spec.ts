import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvFilterSectionComponent } from './yv-filter-section.component';

describe('YvFilterSectionComponent', () => {
  let component: YvFilterSectionComponent;
  let fixture: ComponentFixture<YvFilterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvFilterSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YvFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
