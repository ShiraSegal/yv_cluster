import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
<<<<<<< HEAD
import { BadgeType, ButtonIcon, ButtonType, CheckStateType, CheckType, DataCellType, DataCellValue } from 'src/app/enums/basic-enum';
=======
import { BadgeType, ButtonIcon, ButtonType, CheckStateType, CheckType, DataCellType, DataCellValue, IconButtonLargeType } from 'src/app/enums/basic-enum';
>>>>>>> 3c27fb10a0bcaa68a8d7f34b81246fd6cf802f78
import { AssigneeComponent } from "../assignee/assignee.component";
import { SliderComponent } from "../slider/slider.component";
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ButtonComponent } from '../button/button.component';
import { CheckComponent } from '../check/check.component';
import { BadgeComponent } from '../badge/badge.component';
<<<<<<< HEAD
=======
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { ViewerIconType } from 'src/app/enums/icon-enum';
>>>>>>> 3c27fb10a0bcaa68a8d7f34b81246fd6cf802f78


@Component({
  selector: 'yv-cluster-data-cells',
  standalone: true,
<<<<<<< HEAD
  imports: [BadgeComponent, CommonModule, AssigneeComponent, SliderComponent,IconButtonComponent,ButtonComponent,CheckComponent],
=======
  imports: [IconButtonLargeComponent,BadgeComponent, CommonModule, AssigneeComponent, SliderComponent,IconButtonComponent,ButtonComponent,CheckComponent],
>>>>>>> 3c27fb10a0bcaa68a8d7f34b81246fd6cf802f78
  templateUrl: './data-cells.component.html',
  styleUrl: './data-cells.component.scss'
})
export class DataCellsComponent {
  @Input() type: DataCellType = DataCellType.TEXT;
  @Input() data?: DataCellValue = '';
  badgeType = BadgeType;
  buttonType = ButtonType;
  buttonIcon = ButtonIcon;
<<<<<<< HEAD
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  checkType = CheckType;
=======
  iconButtonLargeType = IconButtonLargeType;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  checkType = CheckType;
    viewerIconType = ViewerIconType;
>>>>>>> 3c27fb10a0bcaa68a8d7f34b81246fd6cf802f78
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

