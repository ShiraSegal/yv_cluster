import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvBasicTableRowComponent } from './yv-basic-table-row.component';

describe('YvBasicTableRowComponent', () => {
  let component: YvBasicTableRowComponent;
  let fixture: ComponentFixture<YvBasicTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvBasicTableRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YvBasicTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
