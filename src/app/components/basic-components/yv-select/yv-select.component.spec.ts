import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvSelectComponent } from './yv-select.component';

describe('YvSelectComponent', () => {
  let component: YvSelectComponent;
  let fixture: ComponentFixture<YvSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YvSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
