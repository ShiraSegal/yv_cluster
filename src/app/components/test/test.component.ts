import { CommonModule } from "@angular/common";
import { CheckComponent } from "../basic-components/check/check.component";
import { SliderComponent } from "../basic-components/slider/slider.component";
import { BadgeType, ButtonIcon, ButtonSize, CardIcons, StatusActiveOrNotActive } from 'src/app/enums/basic-enum';
import { BasicTableRowPropertyVariants, ButtonType, CheckStateType, DataCellType, HeaderCellType, IconButtonLargeType, SliderNavigationTabTextType, SliderNavigationTabType, State } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../basic-components/button/button.component';
import { IconButtonComponent } from '../basic-components/icon-button/icon-button.component';
import { AssigneeComponent } from '../basic-components/assignee/assignee.component';
import { BasicTableComponent } from '../basic-components/basic-table/basic-table.component';
import { DataCellsComponent } from '../basic-components/data-cells/data-cells.component';
import { HeaderCellsComponent } from '../basic-components/header-cells/header-cells.component';
import { SlidebarNavigationComponent } from '../basic-components/slidebar-navigation/slidebar-navigation.component';
import { SwitchComponent } from '../basic-components/switch/switch.component';
import { BasicTabComponent } from '../basic-components/basic-tab/basic-tab.component';
import { FieldComponent } from '../basic-components/field/field.component';
import { EnterBookidComponent } from '../cluster-managment/enter-bookid/enter-bookid.component';
import { IconType } from 'src/app/enums/icon-enum';
import { ViewerComponent } from '../basic-components/viewer/viewer.component';
import { IconButtonLargeComponent } from '../basic-components/icon-button-large/icon-button-large.component';
import { TableHeaderComponent } from "../basic-components/table-header/table-header.component";
import { BasicTableRowComponent } from '../basic-components/basic-table-row/basic-table-row.component';
import { FormControl } from '@angular/forms';
import { SliderNavigationTabComponent } from '../basic-components/slider-navigation-tab/slider-navigation-tab.component';
import { Component } from "@angular/core";
import { CheckType } from "src/app/enums/check-enum";
@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [
    IconButtonComponent,
    SliderComponent,
    CheckComponent,
    AssigneeComponent,
    DataCellsComponent,
    HeaderCellsComponent,
    FieldComponent,
    CommonModule,
    ButtonComponent,
    SwitchComponent,
    BasicTabComponent,
    IconButtonLargeComponent,
    AssigneeComponent,
    BasicTableRowComponent,
    DataCellsComponent,
    HeaderCellsComponent,
    EnterBookidComponent,
    FieldComponent,
    CommonModule,
    IconButtonComponent,
    SliderNavigationTabComponent,
    ButtonComponent,
    CheckComponent,
    IconButtonLargeComponent,
    BasicTabComponent,
    SliderComponent,
    SwitchComponent,
    ViewerComponent,
    TableHeaderComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  //enums-----------------------------------------------------------------------
  iconType = IconType;//  types of icons.  
  badgeType = BadgeType;//types of badge
  label: string = 'Lable';
  CheckStateType = CheckStateType;
  CheckType = CheckType;
  iconButtonLargeType = IconButtonLargeType;
  StatusActiveOrNotActive = StatusActiveOrNotActive;
  CardIcons = CardIcons;
  ButtonType = ButtonType;
  ButtonSize = ButtonSize;
  ButtonIcon = ButtonIcon;
  //variables-----------------------------------------------------------------------
  // button component properties
  // label: string = 'Lable';//button label
  //enum ButtonType
  primary = ButtonType//button type
  // secondary = ButtonType.SECONDARY//button type
  // tertiany = ButtonType.TERTIARY//button type
  //enum ButtonSize
  big = ButtonSize.BIG//button size
  small = ButtonSize.SMALL//button size;
  //enum ButtonIcon
  icon = ButtonIcon.CHEVRON_LEFT//button icon

  //this state get the status of the switch
  basicTableRowPropertyVariants = BasicTableRowPropertyVariants;
  HeaderCellType = HeaderCellType;
  dataCellType = DataCellType;
  stateEnum = State;
  sliderNavigationTabType = SliderNavigationTabType;
  sliderNavigationTabTextType = SliderNavigationTabTextType
  // variant1 = ButtonIconProperty.VARIANT1
  // variant2 = ButtonIconProperty.VARIANT2
  // variant3 = ButtonIconProperty.VARIANT3
  // icon=ButtonIcon.CHEVRON_LEFT
  // variant1 = ButtonIconProperty.VARIANT1
  // variant2 = ButtonIconProperty.VARIANT2
  // variant3 = ButtonIconProperty.VARIANT3
  // icon = ButtonIcon.CHEVRON_LEFT
  title1 = "Heading Large"
  title2 = "Heading Medium-Bold"
  title3 = "Heading Small"
  title4 = "Heading Small-bold"
  // size1: TextSize = TextSize.LARGE
  // size2: TextSize = TextSize.MEDIUM
  // size3: TextSize = TextSize.SMALL
  bodyText1: string = 'Body Large Upon initial observation, it may appear that there are only two primary scenarios for ';
  bodyText2: string = 'Body Medium Upon initial observation, it may appear that there are only two primary scenarios for users:  ';
  bodyText3: string = 'Body Small Upon initial observation, it may appear that there are only two primary scenarios for users:  ';
  searchControl = new FormControl('');
  // btnType = ButtonType.PRIMARY;
  // btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
  // txt1 = "test btn1"

  title = 'test';
  isError: boolean = false;
  isDisabled: boolean = false;
  isFocused: boolean = false;
  isPopulated: boolean = true;
  // label: string = 'label';

  // title = 'yv-clusters';

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
  //this state get the status of the tab
  tabState: boolean = false;



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

