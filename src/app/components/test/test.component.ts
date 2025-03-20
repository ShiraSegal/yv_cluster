import { Component } from '@angular/core';
import { BadgeType,DataCellType, HeaderCellType, SliderNavigationTabType, State } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
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
  //הזרקות של ENUM 
  HeaderCellType = HeaderCellType;//סוגים של הידרים
  DataCellType = DataCellType;//סוגים של תאים
  IconType = IconType;//סוגים של אייקונים   
  sliderNavigationTabType = SliderNavigationTabType;//סוגים של טאבים בנאב
  stateEnum = State;//סוגים של מצבים של אינפוט וסלקט
  badgeType = BadgeType;//סוגי מצבים של BADGE 
  //משתנים



  //פונקציות
  //HEADER - CELL
  //פונקציה שממינת את העמודה
  handleSort(event: { column: string, direction: string }) {
    console.log(`Sorting by ${event.column} in ${event.direction} order`);
  }
}

