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
import { YvSliderComponent } from '../basic-components/yv-slider/yv-slider.component';
import { HeaderCellType } from 'src/app/enums/header-cell-enum';
import { YvAssigneeComponent } from '../basic-components/yv-assignee/yv-assignee.component';
import { YvBasicTableComponent } from '../basic-components/yv-basic-table/yv-basic-table.component';
import { YvBasicTableRowComponent } from '../basic-components/yv-basic-table-row/yv-basic-table-row.component';
import { YvDataCellsComponent } from '../basic-components/yv-data-cells/yv-data-cells.component';
import { YvHeaderCellsComponent } from '../basic-components/yv-header-cells/yv-header-cells.component';
import { YvInputComponent } from '../basic-components/yv-input/yv-input.component';
import { YvSelectComponent } from '../basic-components/yv-select/yv-select.component';
import { YvTableHeaderComponent } from '../basic-components/yv-table-header/yv-table-header.component';
import { YvTextareaComponent } from '../basic-components/yv-textarea/yv-textarea.component';
import { YvCheckComponent } from '../basic-components/yv-check/yv-check.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [CommonModule,IconButtonComponent,EnterBookidComponent,ButtonComponent,HeadingComponent,BodyComponent],
  imports: [CommonModule, TempButtonComponent,YvSliderComponent,YvAssigneeComponent,YvBasicTableComponent,YvBasicTableRowComponent,YvCheckComponent,YvDataCellsComponent,YvHeaderCellsComponent,YvInputComponent,YvSelectComponent,YvTableHeaderComponent,YvTextareaComponent],
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

  btnType = ButtonType.PRIMARY;
  btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
  // txt1 = "test btn1"

  title = 'yv-clusters';
  HeaderCellType = HeaderCellType;

  handleSort(event: { column: string, direction: string }) {

    console.log(`Sorting by ${event.column} in ${event.direction} order`);
  }

  onClick()
  {
    alert('test on click');
    console.log('test on click');
  }
  
  }
  iconp = "fa-solid fa-plus"
   txt1 = "Enter Book ID"



  // onClick()
  // {
  //   alert('test on click');
  //   console.log('test on click');
  // }

}
