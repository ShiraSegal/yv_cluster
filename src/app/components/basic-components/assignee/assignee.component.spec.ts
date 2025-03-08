import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeComponent } from './assignee.component';

describe('AssigneeComponent', () => {
  let component: AssigneeComponent;
  let fixture: ComponentFixture<AssigneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssigneeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
