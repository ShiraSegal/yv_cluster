import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeOptionComponent } from './native-option.component';

describe('NativeOptionComponent', () => {
  let component: NativeOptionComponent;
  let fixture: ComponentFixture<NativeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NativeOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NativeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
