import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTableRowComponent } from './basic-table-row.component';

describe('BasicTableRowComponent', () => {
  let component: BasicTableRowComponent;
  let fixture: ComponentFixture<BasicTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTableRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
