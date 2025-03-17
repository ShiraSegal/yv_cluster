import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonIcon, ButtonType, CheckStateType, CheckType, DataCellType, DataCellValue } from 'src/app/enums/basic-enum';
import { AssigneeComponent } from "../assignee/assignee.component";
import { SliderComponent } from "../slider/slider.component";
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ButtonComponent } from '../button/button.component';
import { CheckComponent } from '../check/check.component';


@Component({
  selector: 'yv-cluster-data-cells',
  standalone: true,
  imports: [CommonModule, AssigneeComponent, SliderComponent,IconButtonComponent,ButtonComponent,CheckComponent],
  templateUrl: './data-cells.component.html',
  styleUrl: './data-cells.component.scss'
})
export class DataCellsComponent {
  @Input() type: DataCellType = DataCellType.TEXT;
  @Input() data: DataCellValue = '';
  ButtonType = ButtonType;
  ButtonIcon = ButtonIcon;
  DataCellType = DataCellType;
  CheckStateType = CheckStateType;
  CheckType = CheckType;
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

