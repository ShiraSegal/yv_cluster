import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDataFooterComponent } from './mat-data-footer.component';

describe('MatDataFooterComponent', () => {
  let component: MatDataFooterComponent;
  let fixture: ComponentFixture<MatDataFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDataFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatDataFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
