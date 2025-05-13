import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BadgeType, ButtonType, CheckStateType, DataCellType, DataCellValue, IconButtonLargeType } from 'src/app/enums/basic-enum';
import { AssigneeComponent } from "../assignee/assignee.component";
import { BadgeComponent } from '../badge/badge.component';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { CheckComponent } from '../check/check.component';
import { SliderComponent } from '../slider/slider.component';
import { ButtonComponent } from '../button/button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { CheckType } from 'src/app/enums/check-enum';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-data-cells',
  standalone: true,

  imports: [
    ButtonComponent,
    SliderComponent,
    CheckComponent,
    AssigneeComponent,
    BadgeComponent,
    CommonModule,
    IconButtonLargeComponent
    , ReactiveFormsModule,
    SliderComponent,
    CheckComponent,
    AssigneeComponent,
    BadgeComponent,
    IconButtonLargeComponent,
    CommonModule],

  templateUrl: './data-cells.component.html',
  styleUrls: ['./data-cells.component.scss']
})

export class DataCellsComponent<T extends DataCellType> {
  // variables
  @Input() type: T;
  @Input() data: DataCellValue<T>;
  @Input() moreData: { [key: string]: any }; // אובייקט לפרמטרים נוספים
  @Input() control: any;

  @Output() checkStatus = new EventEmitter<CheckType>();
  @Output() iconClick = new EventEmitter<void>();
  bookId: string = "";

  //injecting ENUM
  badgeType = BadgeType;
  iconType = IconType;
  buttonType = ButtonType;
  iconButtonLargeType = IconButtonLargeType;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  checkType = CheckType;

  //functions
  ngOnInit() {
    if (typeof this.data === "string" && this.data.includes('collections.yadvashem.org/en/names/')) {
      const parts = this.data.split('/');
      this.bookId = parts[parts.length - 1];
      console.log("bookId", this.bookId);
    }
  }

  isString(value: any): value is string {
    return typeof value === 'string' && value.trim().length > 0;
  }

  isNumber(value: any): value is number {
    return typeof value === 'number';
  }

  checkChange(checkStatus: CheckType) {
    this.checkStatus.emit(checkStatus);
    console.log("data cells check status", checkStatus)
  }
  onClick() {
    // alert('click');
    this.iconClick.emit();


  }
}