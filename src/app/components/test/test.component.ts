import { CommonModule } from "@angular/common";
import { CheckComponent } from "../basic-components/check/check.component";
import { SliderComponent } from "../basic-components/slider/slider.component";
import { Component } from "@angular/core";
import { CheckStateType, CheckType } from "src/app/enums/check-enum";
import { BadgeType,DataCellType, HeaderCellType, IconButtonLargeType, SliderNavigationTabType, State } from 'src/app/enums/basic-enum';
import { AssigneeComponent } from '../basic-components/assignee/assignee.component';
import { DataCellsComponent } from '../basic-components/data-cells/data-cells.component';
import { HeaderCellsComponent } from '../basic-components/header-cells/header-cells.component';
import { FieldComponent } from '../basic-components/field/field.component';
import { IconButtonLargeComponent } from '../basic-components/icon-button-large/icon-button-large.component';
import { BadgeComponent } from '../basic-components/badge/badge.component';
import { IconType } from 'src/app/enums/icon-enum';
@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [
    SliderComponent,
     CheckComponent,
    BadgeComponent,
    AssigneeComponent,
    DataCellsComponent,
    HeaderCellsComponent,
    FieldComponent,
    CommonModule,
    IconButtonLargeComponent,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {

  CheckStateType=CheckStateType; // types of check state.
  CheckType=CheckType; // check type.
                  
  //הזרקות של ENUM 
  headerCellType = HeaderCellType;//סוגים של הידרים
  dataCellType = DataCellType;//סוגים של תאים
  iconType = IconType;//סוגים של אייקונים   
  sliderNavigationTabType = SliderNavigationTabType;//סוגים של טאבים בנאב
  stateEnum = State;//סוגים של מצבים של אינפוט וסלקט
  badgeType = BadgeType;//סוגי מצבים של BADGE 
  iconButtonLargeType =IconButtonLargeType;
  //משתנים



  //פונקציות
  //HEADER - CELL
  //פונקציה שממינת את העמודה
  handleSort(event: { column: string, direction: string }) {
    console.log(`Sorting by ${event.column} in ${event.direction} order`);
  }
}

