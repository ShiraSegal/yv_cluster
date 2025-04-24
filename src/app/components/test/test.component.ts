
import { SliderComponent } from "../basic-components/slider/slider.component";
import { Component } from "@angular/core";
import { CheckComponent } from "../basic-components/check/check.component";
import { AutoClusterTabType, BadgeType, BasicTableRowPropertyVariants, ButtonSize, NarrowBasicTableRowInputState, SliderNavigationTabTextType, StatusActiveOrNotActive } from 'src/app/enums/basic-enum';
import { ButtonIcon, CheckStateType, IconButtonLargeType, SliderNavigationTabType, State, ButtonIconProperty, ButtonType, DataCellType, HeaderCellType,NativeOptionState,NativeOptionType} from 'src/app/enums/basic-enum';
import { CardIcons, ToastNotificationIcons} from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
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
import { NarrowBasicTableRowComponent } from "../basic-components/narrow-basic-table-row/narrow-basic-table-row.component";
import { NarrowBasicTableWarpComponent } from "../basic-components/narrow-basic-table-warp/narrow-basic-table-warp.component";
import { SelectComponent } from "../basic-components/select/select.component";
import { CheckType } from "src/app/enums/check-enum";
@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  // imports: [CommonModule, TempButtonComponent,YvSelectComponent],
  imports: [
    NarrowBasicTableRowComponent,
    NarrowBasicTableWarpComponent,
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
    SelectComponent,
    BasicCardComponent,
    IconButtonLargeComponent],
     
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {

  //data-----------------------------------------------------------------------
  // table-header
  exampleTableHeader = [{ data: '', type: HeaderCellType.CHECK },
  { data: 'Header ', type: HeaderCellType.TEXT },
  { data: 'Header ', type: HeaderCellType.TEXT },
  { data: 'Header ', type: HeaderCellType.TEXT }
  ];
  exampleTableHeader2 = [{ data: '', type: HeaderCellType.CHECK },
  { data: 'CNT', type: HeaderCellType.TEXT },
  { data: 'Clustern ID ', type: HeaderCellType.TEXT },
  { data: 'MissingFileds ', type: HeaderCellType.TEXT },
  { data: 'Comments ', type: HeaderCellType.TEXT },
  { data: 'Status ', type: HeaderCellType.TEXT }
    ,
  { data: 'Assignee ', type: HeaderCellType.TEXT }
    ,
  { data: 'Data of report ', type: HeaderCellType.TEXT }
    ,
  { data: 'Assignee Data ', type: HeaderCellType.TEXT }
  ];
  exampleTableHeader3 = [{ data: '', type: HeaderCellType.CHECK },
  { data: 'Header ', type: HeaderCellType.TEXT },
  { data: 'Header ', type: HeaderCellType.TEXT },
  { data: 'Header ', type: HeaderCellType.TEXT }
  ];
  // narrow-row
  exampleNarrowRow = [
    { data: '', type: DataCellType.CHECK },
    { data: '454682', type: DataCellType.TEXT },
    { data: 'New', type: DataCellType.TEXT },
    { data: '01/01/2005', type: DataCellType.TEXT }
  ];
  exampleNarrowRow2 = [
    { data: '', type: DataCellType.CHECK },
    { data: '1', type: DataCellType.TEXT },
    { data: '2145286', type: DataCellType.TEXT },
    { data: 'MissingFileds', type: DataCellType.TEXT }
    ,
    { data: 'The error message indicates the actual data structure assigned to customData has nested arrays .', type: DataCellType.TEXT }
    ,
    { data:' ', type: DataCellType.STATUS },
    { data: 'Ariel Shron', type: DataCellType.ASSIGNEE }
    ,
    { data: '01/01/2005', type: DataCellType.TEXT },
    { data: '20/02/2000', type: DataCellType.TEXT }

  ];
  exampleNarrowRow3 = [
    { data: '', type: DataCellType.CHECK },
    { data: '454682', type: DataCellType.TEXT },
    { data: 'New', type: DataCellType.TEXT },
    { data: '01/01/2005', type: DataCellType.TEXT }
  ];
  //  narrow-table-wrap
  exampleDataForNarrowTable = {
    [AutoClusterTabType.SAPIR_CLUSTERS]: {
      Headers: this.exampleTableHeader,
      Rows: [
        {
          property: NarrowBasicTableRowInputState.DEFAULT,
          showAction: false,
          cells: this.exampleNarrowRow
        },
        {
          property: NarrowBasicTableRowInputState.HOVER,
          showAction: false,
          cells: this.exampleNarrowRow
        },
        {
          property: NarrowBasicTableRowInputState.DEFAULT,
          showAction: false,
          cells: this.exampleNarrowRow
        },
        {
          property: NarrowBasicTableRowInputState.HOVER,
          showAction: false,
          cells: this.exampleNarrowRow
        },
      ]
    },

    [AutoClusterTabType.MISSING_FIELD]: {
      Headers: this.exampleTableHeader2,
      Rows: [
        {
          property: NarrowBasicTableRowInputState.DEFAULT,
          showAction: false,
          cells: this.exampleNarrowRow2
        },
        {
          property: NarrowBasicTableRowInputState.HOVER,
          showAction: false,
          cells: this.exampleNarrowRow2
        },
        {
          property: NarrowBasicTableRowInputState.DEFAULT,
          showAction: false,
          cells: this.exampleNarrowRow2
        },
        {
          property: NarrowBasicTableRowInputState.HOVER,
          showAction: false,
          cells: this.exampleNarrowRow2
        }
        
      ]
    }
  };

  customSubtitle = 'Custom Subtitle';
  
  nativeOptionswe = [
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
  ];

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
  AutoClusterTabType = AutoClusterTabType;
  NarrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  nativeOptionType = NativeOptionType;

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
  switch-component function
  options :string [] = [];
  label: string = 'Batya';
  optionState = NativeOptionState;
  optionType = NativeOptionType;
  primary = ButtonType.PRIMARY
  secondary = ButtonType.SECONDARY
  tertiany = ButtonType.TERTIARY
  variant1 = ButtonIconProperty.VARIANT1
  variant2 = ButtonIconProperty.VARIANT2


  icon=ButtonIcon.CHEVRON_LEFT
  CheckStateType = CheckStateType;
  CheckType = CheckType;
  viewerIconType = ViewerIconType;
  iconButtonLargeType = IconButtonLargeType;
  variant1 = ButtonIconProperty.VARIANT1
  variant2 = ButtonIconProperty.VARIANT2
  variant3 = ButtonIconProperty.VARIANT3
  icon=ButtonIcon.CHEVRON_LEFT
  variant1 = ButtonIconProperty.VARIANT1
  variant2 = ButtonIconProperty.VARIANT2
  variant3 = ButtonIconProperty.VARIANT3
  icon=ButtonIcon.CHEVRON_LEFT
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
 
  btnType = ButtonType.PRIMARY;
  btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
  // txt1 = "test btn1"

  title = 'test';
  isError: boolean = false;
  isDisabled: boolean = false;
  isFocused: boolean = false;
  isPopulated: boolean = true;
  nativeOptions = [
    { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT }
  ];
  title = 'yv-clusters';
  HeaderCellType = HeaderCellType;
  DataCellType = DataCellType;

   cells = [
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Ariela koppelmann', type: DataCellType.ASSIGNEE },
    { data: 'Checked', type: DataCellType.CHECK },
    { data: 'www.example.com', type: DataCellType.LINK },
    { data: 'Icon Data', type: DataCellType.ICON },
    { data: 'Assignee Name', type: DataCellType.ASSIGNEE },
    { data: 'Button Text', type: DataCellType.BUTTON },
    { data: 'Slider Value', type: DataCellType.SLIDER }
  ];
  txt1 = "test btn1"
  switchState: boolean = false;
  tabState: boolean = false;
  toggleState!: string;
  radioButtonState: boolean = false;
   CardIcons = CardIcons;
  ToastNotificationIcons = ToastNotificationIcons;

   iconp = "fa-solid fa-plus"
   txt1 = "Enter Book ID"
   txt2 = "Enter Book ID"
 
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

