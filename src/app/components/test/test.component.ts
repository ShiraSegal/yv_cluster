import { Component } from '@angular/core';
import { ButtonType, TextSize } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { TempButtonComponent } from '../basic-components/temp-button/temp-button.component';
import { ButtonComponent } from '../basic-components/button/button.component';
import { IconButtonComponent } from '../basic-components/icon-button/icon-button.component';
import { EnterBookidComponent } from '../basic-components/enter-bookid/enter-bookid.component';
import { ButtonIcon } from 'src/app/enums/basic-enum';
import { ButtonIconProperty } from 'src/app/enums/basic-enum';
import { HeaderComponent } from '../core-components/yv-header/yv-header.component';
import { HeadingComponent } from '../basic-components/heading/heading.component';
import { BodyComponent } from '../basic-components/body/body.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [CommonModule,IconButtonComponent,EnterBookidComponent,ButtonComponent,HeadingComponent,BodyComponent],
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
  title1 = "Heading Large"
  title2 = "Heading Medium-Bold"
  title3 = "Heading Small"
  title4 = "Heading Small-bold"
  size1:TextSize = TextSize.LARGE
  size2:TextSize = TextSize.MEDIUM
  size3:TextSize = TextSize.SMALL
  bodyText1: string = 'Body Large Upon initial observation, it may appear that there are only two primary scenarios for ';
  bodyText2: string = 'Body Medium Upon initial observation, it may appear that there are only two primary scenarios for users:  ';
  bodyText3: string = 'Body Small Upon initial observation, it may appear that there are only two primary scenarios for users:  ';

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
