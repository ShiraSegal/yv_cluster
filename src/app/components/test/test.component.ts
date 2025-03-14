
import { Component } from '@angular/core';
// import { ButtonType, CheckStateType, CheckType, DataCellType, HeaderCellType, SliderNavigationTabIconType, SliderNavigationTabType} from 'src/app/enums/basic-enum';
import { ButtonSize, ButtonType, DataCellType, HeaderCellType, TextWeight} from 'src/app/enums/basic-enum';

import {TextSize } from 'src/app/enums/basic-enum';
import { CardIcons, ToastNotificationIcons} from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { YvSelectComponent } from '../basic-components/yv-select/yv-select.component';
import { ButtonComponent } from '../basic-components/button/button.component';
import { IconButtonComponent } from '../basic-components/icon-button/icon-button.component';
import { ButtonIcon } from 'src/app/enums/basic-enum';
import { HeadingComponent } from '../basic-components/heading/heading.component';
import { BodyComponent } from '../basic-components/body/body.component';
import { AssigneeComponent } from '../basic-components/assignee/assignee.component';
import { BasicTableComponent } from '../basic-components/basic-table/basic-table.component';
import { BasicTableRowComponent } from '../basic-components/basic-table-row/basic-table-row.component';
import { CheckComponent } from '../basic-components/check/check.component';
import { DataCellsComponent } from '../basic-components/data-cells/data-cells.component';
import { HeaderCellsComponent } from '../basic-components/header-cells/header-cells.component';
import { SliderComponent } from '../basic-components/slider/slider.component';
import { TabElementComponent } from '../basic-components/tab-element/tab-element.component';
import { TableHeaderComponent } from '../basic-components/table-header/table-header.component';
import { TextareaComponent } from '../basic-components/textarea/textarea.component';
// import { SliderNavigationTabComponent } from '../basic-components/slider-navigation-tab/slider-navigation-tab.component';
import { SlidebarNavigationComponent } from '../basic-components/slidebar-navigation/slidebar-navigation.component';
import { SwitchComponent } from '../basic-components/switch/switch.component';
import { BasicTabComponent } from '../basic-components/basic-tab/basic-tab.component';
import { BasicToggleComponent } from '../basic-components/basic-toggle/basic-toggle.component';
import { BasicRadioButtonComponent } from '../basic-components/basic-radio-button/basic-radio-button.component';
import { FilterSectionComponent } from '../basic-components/filter-section/filter-section.component';
import { BasicCardComponent } from '../basic-components/basic-card/basic-card.component';
import { ToastNotificationComponent } from '../basic-components/toast-notification/toast-notification.component';
import { PieComponentDistributionModalComponent } from '../basic-components/pie-component-distribution-modal/pie-component-distribution-modal.component';
// import { FieldComponent } from '../basic-components/field/field.component';
import { EnterBookidComponent } from '../cluster-managment/enter-bookid/enter-bookid.component';
import { RadioButtonListComponent } from '../basic-components/radio-button-list/radio-button-list.component';
import { CreateClusterComponent } from '../cluster-managment/create-cluster/create-cluster.component';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [
      SlidebarNavigationComponent,
      // SliderNavigationTabComponent,
      HeadingComponent,
      BodyComponent,
      AssigneeComponent,
      BasicTableComponent,
      DataCellsComponent,
      HeaderCellsComponent,
      TabElementComponent,
      EnterBookidComponent,
      // FieldComponent,
      CommonModule,
      IconButtonComponent,
      FilterSectionComponent,
      PieComponentDistributionModalComponent,
      ButtonComponent,
      BasicCardComponent,
      ToastNotificationComponent,
      BodyComponent,
      BasicToggleComponent,
      BasicRadioButtonComponent,
      CheckComponent,
     YvSelectComponent,
      BasicTabComponent,
      SliderComponent,
      SwitchComponent,
      TextareaComponent,
      RadioButtonListComponent,
      CreateClusterComponent
    ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  label: string = 'Lable';
  primary = ButtonType.PRIMARY
  secondary = ButtonType.SECONDARY
  tertiany = ButtonType.TERTIARY
  big=ButtonSize.BIG
  small=ButtonSize.SMALL
  // CheckStateType = CheckStateType;
  // CheckType = CheckType;
  // variant1 = ButtonIconProperty.VARIANT1
  // variant2 = ButtonIconProperty.VARIANT2
  // variant3 = ButtonIconProperty.VARIANT3
  // icon=ButtonIcon.CHEVRON_LEFT
  // variant1 = ButtonIconProperty.VARIANT1
  // variant2 = ButtonIconProperty.VARIANT2
  // variant3 = ButtonIconProperty.VARIANT3
  icon=ButtonIcon.CHEVRON_LEFT
  title1 = "Heading Large"
  title2 = "Heading Medium-Bold"
  title3 = "Heading Small"
  title4 = "Heading Small-bold"
  size1 = TextSize.LARGE
  size2 = TextSize.MEDIUM
  size3 = TextSize.SMALL
  weight1=TextWeight.BOLD
  weight2=TextWeight.NORMAL
  bodyText1: string = 'Body Large Upon initial observation, it may appear that there are only two primary scenarios for ';
  bodyText2: string = 'Body Medium Upon initial observation, it may appear that there are only two primary scenarios for users:  ';
  bodyText3: string = 'Body Small Upon initial observation, it may appear that there are only two primary scenarios for users:  ';
 
  btnType = ButtonType.PRIMARY;
  btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
  // txt1 = "test btn1"
 
  title = 'test';
  isError: boolean = false;
  isDisabled: boolean = false;
  isFocused: boolean = false;
  isPopulated: boolean = true;
  // label: string = 'label';
 
  // title = 'yv-clusters';
  HeaderCellType = HeaderCellType;
  DataCellType = DataCellType;
  // SliderNavigationTabIconType = SliderNavigationTabIconType;
  // SliderNavigationTabType = SliderNavigationTabType;
 
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
  // txt1 = "test btn1"
  switchState: boolean = false;
  tabState: boolean = false;
  toggleState!: string;
  radioButtonState: boolean = false;
  CardIcons = CardIcons;
  ToastNotificationIcons = ToastNotificationIcons;
    selectedOption: string = '';
radioButtonArray:string [] = ["a", "b", "c", "d","other"];
  // handleSort(event: { column: string, direction: string }) {
 
  //   console.log(`Sorting by ${event.column} in ${event.direction} order`);
  // }
 
  // onClick() {
  //   alert('test on click');
  //   console.log('test on click');
  // }
 
 
  // iconp = "fa-solid fa-plus"
  // // txt1 = "Enter Book ID"
  // txt2 = "Enter Book ID"
 
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
 
 
  handleSwitchChange(state: boolean) {
    this.switchState = state;
    console.log('Switch:', state ? 'דלוק' : 'מכובה');
  }
 
  handleTabChange(state: boolean) {
    this.tabState = state;
    console.log('Tab:', state ? 'דלוק' : 'מכובה');
  }
  handleToggleChange(state: string) {
    this.toggleState = state;
    console.log('state:', state);
  }
  handleRadioButtonChange(state: boolean) {
    this.radioButtonState = state;
    console.log('radioButton:', state ? 'דלוק' : 'מכובה');
  }

  onRadioSelectionChange(selectedValue: string) {
    this.selectedOption = selectedValue;
    console.log("האפשרות שנבחרה:", this.selectedOption);
  }
}