import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvAssigneeComponent } from './yv-assignee.component';

describe('YvAssigneeComponent', () => {
  let component: YvAssigneeComponent;
  let fixture: ComponentFixture<YvAssigneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvAssigneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YvAssigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
