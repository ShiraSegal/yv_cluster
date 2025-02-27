import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvTableHeaderComponent } from './yv-table-header.component';

describe('YvTableHeaderComponent', () => {
  let component: YvTableHeaderComponent;
  let fixture: ComponentFixture<YvTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvTableHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YvTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
