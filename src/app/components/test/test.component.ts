import { Component } from '@angular/core';
import { ButtonComponent } from '../basic-components/button/button.component';
import { ButtonIconProperty, ButtonType,SquareIconButtonIcon } from '../../enums/basic-enum';
import { CommonModule } from '@angular/common';
import { BasicSquareIconButtonComponent } from '../basic-components/basic-square-icon-button/basic-square-icon-button.component';
import { CompareModalButtonComponent } from '../basic-components/compare-modal-button/compare-modal-button.component';

@Component({
  selector: 'app-test',
  imports: [CommonModule, ButtonComponent,BasicSquareIconButtonComponent,CompareModalButtonComponent],
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
  list=SquareIconButtonIcon.LIST
  image=SquareIconButtonIcon.IMAGE

  onClick()
  {
    alert('test on click');
  }
}
