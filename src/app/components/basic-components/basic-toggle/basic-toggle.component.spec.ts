import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicToggleComponent } from './basic-toggle.component';

describe('BasicToggleComponent', () => {
  let component: BasicToggleComponent;
  let fixture: ComponentFixture<BasicToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
