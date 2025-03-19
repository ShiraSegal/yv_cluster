import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeType, ButtonIcon, ButtonType, CheckStateType, CheckType, DataCellType, DataCellValue, IconButtonLargeType } from 'src/app/enums/basic-enum';
import { AssigneeComponent } from "../assignee/assignee.component";
import { SliderComponent } from "../slider/slider.component";
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ButtonComponent } from '../button/button.component';
import { CheckComponent } from '../check/check.component';
// import { BadgeComponent } from '../badge/badge.component';
// import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
// import { ViewerIconType } from 'src/app/enums/icon-enum';
 
 
@Component({
  selector: 'yv-cluster-data-cells',
  standalone: true,
  imports: [ CommonModule, AssigneeComponent, SliderComponent,IconButtonComponent,ButtonComponent,CheckComponent],
  templateUrl: './data-cells.component.html',
  styleUrl: './data-cells.component.scss'
})
export class DataCellsComponent {
  @Input() type: DataCellType = DataCellType.TEXT;
  @Input() data?: DataCellValue = '';
  badgeType = BadgeType;
  buttonType = ButtonType;
  buttonIcon = ButtonIcon;
  iconButtonLargeType = IconButtonLargeType;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  checkType = CheckType;
    // viewerIconType = ViewerIconType;
  iconp = "fa-solid fa-plus"
  isString(value: any): value is string {
    return typeof value === 'string' && value.trim().length > 0;
  }
 
  isNumber(value: any): value is number {
    return typeof value === 'number';
  }
 
  getFirstName(fullName: string): string {
    return fullName.split(' ')[0] || '';
  }
 
  getLastName(fullName: string): string {
    const words = fullName.trim().split(' ');
    return words.length > 1 ? words[words.length - 1] : '';
  }
    onClick() {
    alert('test on click');
    console.log('test on click');
  }
}
 
