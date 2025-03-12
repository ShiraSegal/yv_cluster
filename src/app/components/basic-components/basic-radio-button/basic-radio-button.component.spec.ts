import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicRadioButtonComponent } from './basic-radio-button.component';



describe('BasicRadioButtonComponent', () => {
  let component: BasicRadioButtonComponent;
  let fixture: ComponentFixture<BasicRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicRadioButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
