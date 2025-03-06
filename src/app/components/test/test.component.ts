import { Component } from '@angular/core';
import { ButtonType } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { TempButtonComponent } from '../basic-components/temp-button/temp-button.component';
import { YvSliderComponent } from '../basic-components/yv-slider/yv-slider.component';
import { YvSelectComponent } from '../basic-components/yv-select/yv-select.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [CommonModule, TempButtonComponent,YvSliderComponent,YvSelectComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  btnType = ButtonType.PRIMARY;
  btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
  // txt1 = "test btn1"

  title = 'test';
  isError: boolean = false;
  isDisabled: boolean = false;
  isFocused: boolean = false;
  isPopulated: boolean = true;
  label: string = 'label';


  onClick()
  {
    alert('test on click');
    console.log('test on click');
  }

}
