import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTableWarpComponent } from './basic-table-warp.component';

describe('BasicTableWarpComponent', () => {
  let component: BasicTableWarpComponent;
  let fixture: ComponentFixture<BasicTableWarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTableWarpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTableWarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
