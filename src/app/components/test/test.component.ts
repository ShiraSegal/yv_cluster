import { Component } from '@angular/core';
import { ButtonType } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { TempButtonComponent } from '../basic-components/temp-button/temp-button.component';
import { ButtonComponent } from '../basic-components/button/button.component';
import { IconButtonComponent } from '../basic-components/icon-button/icon-button.component';
import { EnterBookidComponent } from '../basic-components/enter-bookid/enter-bookid.component';
import { ButtonIcon } from 'src/app/enums/basic-enum';
import { ButtonIconProperty } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [CommonModule,IconButtonComponent,EnterBookidComponent,ButtonComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  primary = ButtonType.PRIMARY
  secondary = ButtonType.SECONDARY
  tertiany = ButtonType.TERTIARY
  variant1 = ButtonIconProperty.VARIANT1
  variant2 = ButtonIconProperty.VARIANT2
  variant3 = ButtonIconProperty.VARIANT3
  icon=ButtonIcon.CHEVRON_LEFT
  onClick()
  {
    alert('test on click');
  }
  iconp = "fa-solid fa-plus"
   txt1 = "Enter Book ID"



  // onClick()
  // {
  //   alert('test on click');
  //   console.log('test on click');
  // }

}
