import { Component } from '@angular/core';
import { ButtonType } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { TempButtonComponent } from '../basic-components/temp-button/temp-button.component';
import { ButtonComponent } from '../basic-components/button/button.component';
import { IconButtonComponent } from '../basic-components/icon-button/icon-button.component';
import { EnterBookidComponent } from '../basic-components/enter-bookid/enter-bookid.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [CommonModule,IconButtonComponent,EnterBookidComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  icon = "fa-solid fa-plus"
  // txt1 = "test btn1"



  // onClick()
  // {
  //   alert('test on click');
  //   console.log('test on click');
  // }

}
