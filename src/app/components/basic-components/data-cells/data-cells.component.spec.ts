import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCellsComponent } from './data-cells.component';

describe('DataCellsComponent', () => {
  let component: DataCellsComponent;
  let fixture: ComponentFixture<DataCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCellsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
