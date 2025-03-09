import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvHeaderCellsComponent } from './yv-header-cells.component';

describe('YvHeaderCellsComponent', () => {
  let component: YvHeaderCellsComponent;
  let fixture: ComponentFixture<YvHeaderCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvHeaderCellsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YvHeaderCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
