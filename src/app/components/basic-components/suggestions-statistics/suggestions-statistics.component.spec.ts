import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsStatisticsComponent } from './suggestions-statistics.component';

describe('SuggestionsStatisticsComponent', () => {
  let component: SuggestionsStatisticsComponent;
  let fixture: ComponentFixture<SuggestionsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionsStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestionsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
