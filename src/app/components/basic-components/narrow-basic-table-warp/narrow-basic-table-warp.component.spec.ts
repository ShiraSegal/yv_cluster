import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowBasicTableWarpComponent } from './narrow-basic-table-warp.component';

describe('NarrowBasicTableWarpComponent', () => {
  let component: NarrowBasicTableWarpComponent;
  let fixture: ComponentFixture<NarrowBasicTableWarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarrowBasicTableWarpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NarrowBasicTableWarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
