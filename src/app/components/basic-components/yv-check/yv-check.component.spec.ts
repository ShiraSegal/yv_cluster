  import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvCheckComponent } from './yv-check.component';

describe('YvCheckComponent', () => {
  let component: YvCheckComponent;
  let fixture: ComponentFixture<YvCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YvCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YvCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
