import { Component } from '@angular/core';
<<<<<<< HEAD
import { BadgeType, ButtonType } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { TempButtonComponent } from '../basic-components/temp-button/temp-button.component';
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
 import { BadgeComponent } from '../badge/badge.component';

=======
import { ButtonType, DataCellType, HeaderCellType, SliderNavigationTabIconType, SliderNavigationTabType} from 'src/app/enums/basic-enum';
import {TextSize } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { TempButtonComponent } from '../basic-components/temp-button/temp-button.component';
import { ButtonComponent } from '../basic-components/button/button.component';
import { IconButtonComponent } from '../basic-components/icon-button/icon-button.component';
import { EnterBookidComponent } from '../basic-components/enter-bookid/enter-bookid.component';
import { ButtonIcon } from 'src/app/enums/basic-enum';
import { ButtonIconProperty } from 'src/app/enums/basic-enum';
//import { HeaderComponent } from '../core-components/yv-header/yv-header.component';
import { HeadingComponent } from '../basic-components/heading/heading.component';
import { BodyComponent } from '../basic-components/body/body.component';
 
import { AssigneeComponent } from '../basic-components/assignee/assignee.component';
import { BasicTableComponent } from '../basic-components/basic-table/basic-table.component';
import { BasicTableRowComponent } from '../basic-components/basic-table-row/basic-table-row.component';
//import { BasicTableWarpComponent } from '../basic-components/basic-table-warp/basic-table-warp.component';
import { CheckComponent } from '../basic-components/check/check.component';
import { DataCellsComponent } from '../basic-components/data-cells/data-cells.component';
import { HeaderCellsComponent } from '../basic-components/header-cells/header-cells.component';
//import { NarrowBasicTableComponent } from '../basic-components/narrow-basic-table/narrow-basic-table.component';
import { SliderComponent } from '../basic-components/slider/slider.component';
import { TabElementComponent } from '../basic-components/tab-element/tab-element.component';
import { TableHeaderComponent } from '../basic-components/table-header/table-header.component';
import { TextareaComponent } from '../basic-components/textarea/textarea.component';
>>>>>>> b53458fbb71a7a2c9c69057aa81b64cb5a62d693

import { SliderNavigationTabComponent } from '../basic-components/slider-navigation-tab/slider-navigation-tab.component';
import { SlidebarNavigationComponent } from '../basic-components/slidebar-navigation/slidebar-navigation.component';
import { FieldComponent } from '../basic-components/field/field.component';
 
@Component({
  selector: 'yv-cluster-test',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, TempButtonComponent,YvSliderComponent,YvAssigneeComponent,YvBasicTableComponent,YvBasicTableRowComponent,YvCheckComponent,YvDataCellsComponent,YvHeaderCellsComponent,YvInputComponent,YvSelectComponent,YvTableHeaderComponent,YvTextareaComponent,BadgeComponent],
=======
  imports: [ SlidebarNavigationComponent, SliderNavigationTabComponent, CommonModule, TempButtonComponent,IconButtonComponent,EnterBookidComponent,ButtonComponent,HeadingComponent,BodyComponent,AssigneeComponent,BasicTableComponent,BasicTableRowComponent,CheckComponent,DataCellsComponent,HeaderCellsComponent,SliderComponent,TabElementComponent,TableHeaderComponent,TextareaComponent,FieldComponent],
>>>>>>> b53458fbb71a7a2c9c69057aa81b64cb5a62d693
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
<<<<<<< HEAD
  BadgeType=BadgeType;
=======
  label: string = 'Lable';
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
 
>>>>>>> b53458fbb71a7a2c9c69057aa81b64cb5a62d693
  btnType = ButtonType.PRIMARY;
  btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
 
 
  title = 'yv-clusters';
  HeaderCellType = HeaderCellType;
  DataCellType = DataCellType;
  SliderNavigationTabIconType = SliderNavigationTabIconType;
  SliderNavigationTabType = SliderNavigationTabType;
 
  cells = [
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE }
    // { data: 'Checked', type: DataCellType.CHECK },
    // { data: 'www.example.com', type: DataCellType.LINK },
    // { data: 'Icon Data', type: DataCellType.ICON },
    // { data: 'Assignee Name', type: DataCellType.ASSIGNEE },
    // { data: 'Button Text', type: DataCellType.BUTTON },
    // { data: 'Slider Value', type: DataCellType.SLIDER }
  ];
  handleSort(event: { column: string, direction: string }) {
 
    console.log(`Sorting by ${event.column} in ${event.direction} order`);
  }
 
  onClick() {
    alert('test on click');
    console.log('test on click');
  }
  headers: { data: string; type: HeaderCellType }[] = [
    { data: 'name list', type: HeaderCellType.TEXT },
    { data: 'to do', type: HeaderCellType.TEXT },
    { data: '', type: HeaderCellType.PLACEOLDER },
  ];
 
  rows: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [
    {
      property: 'Default',
      showAction: false,
      cells: [
        { data: 'Data ', type: DataCellType.TEXT },
        { data: 'Data ', type: DataCellType.TEXT },
        { data: '', type: DataCellType.CHECK },
      ]
    },
    {
      property: 'Default',
      showAction: false,
      cells: [
        { data: 'Data 2', type: DataCellType.TEXT },
        { data: 'Link to something', type: DataCellType.LINK },
       
      ]
    }
  ];
  headers2: { data: string; type: HeaderCellType }[] = [
    { data: 'name list', type: HeaderCellType.TEXT },
    { data: 'done', type: HeaderCellType.TEXT },
    { data: '', type: HeaderCellType.CHECK },
  ];
 
  rows2: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [
    {
      property: 'Default',
      showAction: false,
      cells: [
        { data: 'Data 1', type: DataCellType.TEXT },
        { data: 'Data 1', type: DataCellType.TEXT },
        { data: 'Link to something', type: DataCellType.LINK },
      ]
    },
    {
      property: 'Default',
      showAction: false,
      cells: [
        { data: 'Data 1', type: DataCellType.TEXT },
        { data: 'Data 1', type: DataCellType.TEXT },
        { data: 'Link to something', type: DataCellType.LINK },
      ]
    }
  ];
 
  headers1: { data: string; type: HeaderCellType }[] = [
    { data: 'name list', type: HeaderCellType.TEXT },
    { data: 'done ', type: HeaderCellType.TEXT },
    { data: 'to do', type: HeaderCellType.TEXT },
    { data: '', type: HeaderCellType.PLACEOLDER },
  ];
 
  rows1: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [
    {
      property: 'Default',
      showAction: false,
      cells: [
        { data: 'Data ', type: DataCellType.TEXT },
        { data: ' ', type: DataCellType.SLIDER },
        { data: 'Data ', type: DataCellType.TEXT },
        { data: '', type: DataCellType.CHECK },
      ]
    },
    {
      property: 'Default',
      showAction: false,
      cells: [
        { data: 'Data ', type: DataCellType.TEXT },
        { data: ' ', type: DataCellType.SLIDER },
        { data: 'Data ', type: DataCellType.TEXT },
        { data: '', type: DataCellType.CHECK },
 
      ]
    }
  ];
 
  iconp = "fa-solid fa-plus"
  // txt1 = "Enter Book ID"
 
  // onClick()
  // {
  //   alert('test on click');
  //   console.log('test on click');
  // }
 
}