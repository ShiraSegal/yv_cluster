import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowBasicTableRowComponent } from './narrow-basic-table-row.component';

describe('NarrowBasicTableRowComponent', () => {
  let component: NarrowBasicTableRowComponent;
  let fixture: ComponentFixture<NarrowBasicTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarrowBasicTableRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NarrowBasicTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
