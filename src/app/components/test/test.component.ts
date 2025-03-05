import { Component } from '@angular/core';
import { ButtonComponent } from '../basic-components/button/button.component';
import { ButtonIconProperty, ButtonType } from '../../enums/basic-enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [CommonModule, ButtonComponent],
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],


})
export class TestComponent {
  primary = ButtonType.PRIMARY
  secondary = ButtonType.SECONDARY
  tertiany = ButtonType.TERTIARY
  variant1=ButtonIconProperty.VARIANT1
  variant2=ButtonIconProperty.VARIANT2
  variant3=ButtonIconProperty.VARIANT3
  onClick()
  {
    alert('test on click');
  }
}
