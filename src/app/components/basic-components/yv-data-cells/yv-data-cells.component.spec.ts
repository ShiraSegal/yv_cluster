import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvDataCellsComponent } from './yv-data-cells.component';

describe('YvDataCellsComponent', () => {
  let component: YvDataCellsComponent;
  let fixture: ComponentFixture<YvDataCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvDataCellsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YvDataCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
