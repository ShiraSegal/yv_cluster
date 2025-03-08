import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNarrowBasicTableComponent } from './tab-narrow-basic-table.component';

describe('TabNarrowBasicTableComponent', () => {
  let component: TabNarrowBasicTableComponent;
  let fixture: ComponentFixture<TabNarrowBasicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNarrowBasicTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabNarrowBasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
