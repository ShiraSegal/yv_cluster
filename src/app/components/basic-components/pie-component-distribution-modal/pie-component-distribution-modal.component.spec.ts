import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieComponentDistributionModalComponent } from './pie-component-distribution-modal.component';

describe('PieComponentDistributionModalComponent', () => {
  let component: PieComponentDistributionModalComponent;
  let fixture: ComponentFixture<PieComponentDistributionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieComponentDistributionModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieComponentDistributionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
