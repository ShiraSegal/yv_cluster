import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvBasicTableComponent } from './yv-basic-table.component';

describe('YvBasicTableComponent', () => {
  let component: YvBasicTableComponent;
  let fixture: ComponentFixture<YvBasicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvBasicTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YvBasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
