import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeType, ButtonType, CheckStateType, DataCellType, DataCellValue, IconButtonLargeType } from 'src/app/enums/basic-enum';
import { AssigneeComponent } from "../assignee/assignee.component";
import { BadgeComponent } from '../badge/badge.component';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { CheckComponent } from '../check/check.component';
import { SliderComponent } from '../slider/slider.component';
import { ButtonComponent } from '../button/button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { CheckType } from 'src/app/enums/check-enum';


@Component({
  selector: 'yv-cluster-data-cells',
  standalone: true,
  imports: [ButtonComponent, SliderComponent, CheckComponent, AssigneeComponent, BadgeComponent, CommonModule],
  templateUrl: './data-cells.component.html',
  styleUrl: './data-cells.component.scss'
})
export class DataCellsComponent<T extends DataCellType>  {
  //variables
  @Input() type!: T;
  @Input() data!: DataCellValue<T>;
  //injecting ENUM
  badgeType = BadgeType;
  IconType = IconType;
  buttonType = ButtonType;
  iconButtonLargeType = IconButtonLargeType;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  checkType = CheckType;
  //functions

  isString(value: any): value is string {
    return typeof value === 'string' && value.trim().length > 0;
  }

  isNumber(value: any): value is number {
    return typeof value === 'number';
  }
  isButtonData(data: any): data is {
    text?: string;
    buttonType?: ButtonType;
    disabled?: boolean;
    isBig?: boolean; // Changed from size
        iconType?: IconType; // Changed from buttonIcon
  } {
    return (
      data &&
      (typeof data.text === 'string' || typeof data.text === 'undefined') &&
      (typeof data.buttonType === 'string' || typeof data.buttonType === 'undefined') &&
      (typeof data.disabled === 'boolean' || typeof data.disabled === 'undefined') &&
      (typeof data.size === 'string' || typeof data.size === 'undefined') &&
      (typeof data.buttonIcon === 'string' || typeof data.buttonIcon === 'undefined')
    );
    }
  onClick() {
    alert('test on click');
    console.log('test on click');
  }
}
