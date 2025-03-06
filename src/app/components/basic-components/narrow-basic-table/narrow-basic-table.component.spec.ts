import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowBasicTableComponent } from './narrow-basic-table.component';

describe('NarrowBasicTableComponent', () => {
  let component: NarrowBasicTableComponent;
  let fixture: ComponentFixture<NarrowBasicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarrowBasicTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NarrowBasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
