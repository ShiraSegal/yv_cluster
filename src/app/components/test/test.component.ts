
import { CommonModule } from "@angular/common";
import { CheckComponent } from "../basic-components/check/check.component";
import { SliderComponent } from "../basic-components/slider/slider.component";
import { Component } from "@angular/core";
import { CheckStateType, CheckType } from "src/app/enums/check-enum";
import { BadgeType, BasicTableRowPropertyVariants, ButtonIcon, ButtonSize, ButtonType, CardIcons, DataCellType, HeaderCellType, IconButtonLargeType, SliderNavigationTabTextType, SliderNavigationTabType, State, StatusActiveOrNotActive } from 'src/app/enums/basic-enum';
import { AssigneeComponent } from '../basic-components/assignee/assignee.component';
import { DataCellsComponent } from '../basic-components/data-cells/data-cells.component';
import { HeaderCellsComponent } from '../basic-components/header-cells/header-cells.component';
import { FieldComponent } from '../basic-components/field/field.component';
import { IconButtonLargeComponent } from '../basic-components/icon-button-large/icon-button-large.component';
import { BadgeComponent } from '../basic-components/badge/badge.component';
import { IconType } from 'src/app/enums/icon-enum';
import { ButtonComponent } from "../basic-components/button/button.component";
import { SwitchComponent } from "../basic-components/switch/switch.component";
import { BasicTabComponent } from "../basic-components/basic-tab/basic-tab.component";
import { BasicCardComponent } from "../basic-components/basic-card/basic-card.component";
import { IconButtonComponent } from "../basic-components/icon-button/icon-button.component";
import { BasicTableRowComponent } from "../basic-components/basic-table-row/basic-table-row.component";
import { ViewerComponent } from "../basic-components/viewer/viewer.component";
import { SliderNavigationTabComponent } from "../basic-components/slider-navigation-tab/slider-navigation-tab.component";
import { SlidebarNavigationComponent } from "../basic-components/slidebar-navigation/slidebar-navigation.component";
import { FormControl } from "@angular/forms";
@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [
    IconButtonComponent,
    SliderComponent,
    CheckComponent,
    ViewerComponent,
    BadgeComponent,
    BasicTableRowComponent,
    BadgeComponent,
    AssigneeComponent,
    DataCellsComponent,
    HeaderCellsComponent,
    SliderNavigationTabComponent,
    SlidebarNavigationComponent,
    FieldComponent,
    CommonModule,
    ButtonComponent,
    SwitchComponent,
    BasicTabComponent,
    BasicCardComponent,
    IconButtonLargeComponent,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  //enums-----------------------------------------------------------------------
  headerCellType = HeaderCellType;//header cell types
  dataCellType = DataCellType;//data cell types
  iconType = IconType;//  types of icons.  
  sliderNavigationTabType = SliderNavigationTabType;//types of slider navigation tab
  stateEnum = State;//  types of input & select.
  badgeType = BadgeType;//types of badge
  iconButtonLargeType = IconButtonLargeType;
  StatusActiveOrNotActive = StatusActiveOrNotActive;
  CardIcons = CardIcons;
  ButtonType = ButtonType;
  ButtonSize = ButtonSize;
  CheckStateType = CheckStateType; // types of check state.
  CheckType = CheckType; // check type.
  ButtonIcon = ButtonIcon; 
  basicTableRowPropertyVariants = BasicTableRowPropertyVariants;
  sliderNavigationTabTextType = SliderNavigationTabTextType 
  
  //variables-----------------------------------------------------------------------
  // button component properties
  label: string = 'Lable';//button label
  //enum ButtonType
  primary = ButtonType.PRIMARY//button type
  secondary = ButtonType.SECONDARY//button type
  tertiany = ButtonType.TERTIARY//button type
  //enum ButtonSize
  big = ButtonSize.BIG//button size
  small = ButtonSize.SMALL//button size;
  //enum ButtonIcon
  icon = ButtonIcon.CHEVRON_LEFT//button icon

  //this state get the status of the switch
  switchState: boolean = false;
  //this state get the status of the tab
  tabState: boolean = false;
//field placeolder
searchControl = new FormControl('');

  //functions-----------------------------------------------------------------------
  //header-cell- sort function
  handleSort(event: { column: string, direction: string }) {
    console.log(`Sorting by ${event.column} in ${event.direction} order`);
  }
  //switch-component function
  handleSwitchChange(state: boolean) {
    this.switchState = state;
  }
  //basic-tab-component function
  handleTabChange(state: boolean) {
    this.tabState = state;
  }
  //button & icon button component function
  onClick() {
    alert('test on click');
    console.log('test on click');
  }
}