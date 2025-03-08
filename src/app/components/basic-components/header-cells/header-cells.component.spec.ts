import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCellsComponent } from './header-cells.component';

describe('HeaderCellsComponent', () => {
  let component: HeaderCellsComponent;
  let fixture: ComponentFixture<HeaderCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCellsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
