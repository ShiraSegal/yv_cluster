import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl } from "@angular/forms";
//import enums
import {  ButtonSize, CheckStateType, ButtonType, DataCellType, HeaderCellType, IconButtonLargeType, SliderNavigationTabType, State , AutoClusterTabType,  BasicTableRowPropertyVariants, ButtonIconProperty, NarrowBasicTableRowInputState, NativeOptionState, NativeOptionType, SliderNavigationTabTextType, TextSize, TextWeight, BadgeType, RadioButtonListDirection, BigCardSize, HomeTableTabType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { CheckType } from "src/app/enums/check-enum";
//import components
import { HeadingComponent } from '../basic-components/heading/heading.component';
import { BodyComponent } from '../basic-components/body/body.component';
import { SliderComponent } from "../basic-components/slider/slider.component";
import { CheckComponent } from "../basic-components/check/check.component";
import { PopoverHeader, PopoverType } from 'src/app/enums/basic-enum';
import { AssigneeComponent } from '../basic-components/assignee/assignee.component';
import { DataCellsComponent } from '../basic-components/data-cells/data-cells.component';
import { HeaderCellsComponent } from '../basic-components/header-cells/header-cells.component';
import { BasicToggleComponent } from '../basic-components/basic-toggle/basic-toggle.component';
import { BasicRadioButtonComponent } from '../basic-components/basic-radio-button/basic-radio-button.component';
import { FilterSectionComponent } from '../basic-components/filter-section/filter-section.component';
import { ToastNotificationComponent } from '../basic-components/toast-notification/toast-notification.component';
import { EnterBookidComponent } from '../cluster-managment/enter-bookid/enter-bookid.component';
import { RadioButtonListComponent } from '../basic-components/radio-button-list/radio-button-list.component';
//import { CreateClusterComponent } from '../cluster-managment/create-cluster/create-cluster.component';
import { FieldComponent } from '../basic-components/field/field.component';
import { IconButtonLargeComponent } from '../basic-components/icon-button-large/icon-button-large.component';
import { BadgeComponent } from '../basic-components/badge/badge.component';
import { ButtonComponent } from "../basic-components/button/button.component";
import { SwitchComponent } from "../basic-components/switch/switch.component";
import { BasicTabComponent } from "../basic-components/basic-tab/basic-tab.component";
import { BasicCardComponent } from "../basic-components/basic-card/basic-card.component";
import { IconButtonComponent } from "../basic-components/icon-button/icon-button.component";
import { BasicTableRowComponent } from "../basic-components/basic-table-row/basic-table-row.component";
import { ViewerComponent } from "../basic-components/viewer/viewer.component";
import { SliderNavigationTabComponent } from "../basic-components/slider-navigation-tab/slider-navigation-tab.component";
import { SlidebarNavigationComponent } from "../basic-components/slidebar-navigation/slidebar-navigation.component";
import { NarrowBasicTableRowComponent } from "../basic-components/narrow-basic-table-row/narrow-basic-table-row.component";
import { NarrowBasicTableWarpComponent } from "../basic-components/narrow-basic-table-warp/narrow-basic-table-warp.component";
import { TableHeaderComponent } from "../basic-components/table-header/table-header.component";
import { PieCircleComponent } from "../basic-components/pie-circle/pie-circle.component";
import { PieComponentDistributionModalComponent } from "../basic-components/pie-component-distribution-modal/pie-component-distribution-modal.component";
import { PieTableComponent } from "../basic-components/pie-table/pie-table.component";
import { BigCardComponent } from "../basic-components/big-card/big-card.component";
import { SatisticCardComponent } from "../basic-components/satistic-card/satistic-card.component";
import { CreateClusterComponent } from "../cluster-managment/create-cluster/create-cluster.component";
import { PopoverComponent } from "../basic-components/popover/popover.component";
import { NativeOptionComponent } from "../basic-components/native-option/native-option.component";
import { BasicTableComponent } from '../basic-components/basic-table/basic-table.component';
import { SelectComponent } from '../basic-components/select/select.component';
import { CardColor } from "src/app/enums/card-colors.enum";
import { FilterHandlingSuggestionsComponent } from "../basic-components/filter-handling-suggestions/filter-handling-suggestions.component";
import { HandlingSuggestionsPageComponent } from "../pages/handling-suggestions-page/handling-suggestions-page.component";
import { TableGroupIdDetailsComponent } from "../basic-components/table-group-id-details/table-group-id-details.component";
import { HomeComponent } from "../pages/home/home.component";
import { BasicTableWarpComponent } from "../basic-components/basic-table-warp/basic-table-warp.component";
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
    BadgeComponent,
    CommonModule,
    ButtonComponent,
    SwitchComponent,
    BasicTabComponent,
    IconButtonLargeComponent,
    AssigneeComponent,
    BasicTableRowComponent,
    DataCellsComponent,
    HeaderCellsComponent,
    FieldComponent,
    CommonModule,
    SliderNavigationTabComponent,
    BasicTableWarpComponent,
    ButtonComponent,
    CheckComponent,
    IconButtonLargeComponent,
    BasicTabComponent,
    SliderComponent,
    SwitchComponent,
    ViewerComponent,
    SlidebarNavigationComponent,
    BasicCardComponent,
    NarrowBasicTableRowComponent,
    NarrowBasicTableWarpComponent,
    SliderComponent,
    CheckComponent,
    ViewerComponent,
    BadgeComponent,
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
    TableHeaderComponent,
    BasicTabComponent,
    BasicCardComponent,
    IconButtonLargeComponent,
    PieCircleComponent,
    PieComponentDistributionModalComponent,
    PieTableComponent,
    BigCardComponent,
    SatisticCardComponent,
    ToastNotificationComponent,
    FilterSectionComponent,
    RadioButtonListComponent,
    BasicRadioButtonComponent,
    BasicToggleComponent,
    BasicTabComponent,
    HeaderCellsComponent,
    EnterBookidComponent,
    HeadingComponent,
    BodyComponent,
    //TableGroupIdDetailsComponent,
    FilterHandlingSuggestionsComponent,
    HandlingSuggestionsPageComponent,
    CreateClusterComponent,
    PopoverComponent,
    HomeComponent

  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  //enums-----------------------------------------------------------------------
  iconType = IconType;//  types of icons. 
  badgeType = BadgeType;//types of badge
  checkStateType = CheckStateType;
  checkType = CheckType;
  headerCellType = HeaderCellType;//header cell types
  dataCellType = DataCellType;//data cell types  
  sliderNavigationTabType = SliderNavigationTabType;//types of slider navigation tab
  stateEnum = State;//  types of input & select.
  iconButtonLargeType = IconButtonLargeType;
  buttonType = ButtonType;
  buttonSize = ButtonSize;
  bigCardSize=BigCardSize;
  basicTableRowPropertyVariants = BasicTableRowPropertyVariants;
  sliderNavigationTabTextType = SliderNavigationTabTextType
  autoClusterTabType = AutoClusterTabType;
  NarrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  narrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  nativeOptionType = NativeOptionType;
  optionState = NativeOptionState;
  optionType = NativeOptionType;
  // ToastNotificationIcons = ToastNotificationIcons;
  RadioButtonListDirection=RadioButtonListDirection;
  NativeOptionType=NativeOptionType;
  NativeOptionState=NativeOptionState;
  popoverType=PopoverType;
  //variables-----------------------------------------------------------------------
  radioButtonListDirection=RadioButtonListDirection;
  cardColorEnum=CardColor;
  
//variables-----------------------------------------------------------------------
  // button component properties
  label: string = 'Lable';//button label
  //switch
  switchState: boolean = false;
  //this state get the status of the tab
  tabState: boolean = false;
  //field placeolder
  searchControl = new FormControl('');
  //enum ButtonType
  primary = ButtonType.PRIMARY//button type
  secondary = ButtonType.SECONDARY//button type
  tertiany = ButtonType.TERTIARY//button type
  //enum IconType
  icon = IconType.CHEVRON_LEFT_LIGHT//button icon
  //enum ButtonSize
  big = ButtonSize.BIG//button size
  small = ButtonSize.SMALL//button size;
//toggle 
  toggleState!: string;
  //radio
  radioButtonState: boolean = false;
//icon
  iconp = "fa-solid fa-plus"


//heading

  //variables-----------------------------------------------------------------------
  //heading component properties
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
  txt2 = "Enter Book ID"
  options: string[] = [];
  variant1 = ButtonIconProperty.VARIANT1
  variant2 = ButtonIconProperty.VARIANT2
  variant3 = ButtonIconProperty.VARIANT3
  title = 'test';
  isError: boolean = false;
  isDisabled: boolean = false;
  isFocused: boolean = false;
  isPopulated: boolean = true;

  // title = 'yv-clusters';
  HeaderCellType = HeaderCellType;
  DataCellType = DataCellType;
  // SliderNavigationTabIconType = SliderNavigationTabIconType;
  // SliderNavigationTabType = SliderNavigationTabType;

  

  selectedOption: string = '';
  radioButtonArray: string[] = ["a", "b", "c", "d", "other"];
  nativeOptions = [
    { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT }
  ];
  customSubtitle = 'Suggestions generated by the automated system running overnight.';
  nativeOptionswe = [
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
  ];
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
  onRadioButtonListSelectionChange(selectedValue: string) {
    this.selectedOption = selectedValue;
    console.log("האפשרות שנבחרה:", this.selectedOption);
  }
  checkChange(checkStatus:CheckType) {
    console.log("check status", checkStatus)

  }
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
    { data: ' ', type: DataCellType.STATUS },
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

  // customSubtitle = 'Custom Subtitle';
  // nativeOptionswe = [
  //   { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
  //   { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
  //   { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
  // ];


  

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
  popoverOptionsStatus:{
    optionType: NativeOptionType.STATUS;
    optionState: NativeOptionState;
    property: BadgeType;
  }[] = [{optionType: NativeOptionType.STATUS, optionState: NativeOptionState.DEFAULT,property: BadgeType.TODO},
    {optionType: NativeOptionType.STATUS, optionState: NativeOptionState.DEFAULT,property: BadgeType.DONE},
  ];

popoverOptionsAssignee:{
  optionType: NativeOptionType;
  optionState: NativeOptionState;
  displayText: string;
}[] = [{optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT, displayText: 'Assignee 1'},
  {optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT, displayText: 'Assignee 2'},
  {optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT, displayText: 'Assignee 3'},
];

popoverOptionsLink:{
  optionType: NativeOptionType.TEXT;
  optionState: NativeOptionState;
  displayText: string;
}[] = [{optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT, displayText: 'Link 1'},
  {optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT, displayText: 'Link 2'},
  {optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT, displayText: 'Link 3'},
];



  //functions-----------------------------------------------------------------------
  //header-cell- sort function
  // handleSort(event: { column: string, direction: string }) {
  //   console.log(`Sorting by ${event.column} in ${event.direction} order`);
  // }
  // //button & icon button component function
  // onClick() {
  //   alert('test on click');
  //   console.log('test on click');
  // }
  headers: { data: string; type: HeaderCellType }[] = [
    { data: 'name list', type: HeaderCellType.TEXT },
    { data: 'to do', type: HeaderCellType.TEXT },
    { data: '', type: HeaderCellType.PLACEOLDER },
  ];

  rows: { property: string; showAction: boolean; cells:{ data: string; type: DataCellType ; moreData?: { [key: string]: any }}[] }[] = [
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

  rows2: { property: string; showAction: boolean; cells:{ data: string; type: DataCellType ; moreData?: { [key: string]: any }}[] }[] = [
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

  rows1: { property: string; showAction: boolean; cells:{ data: string; type: DataCellType ; moreData?: { [key: string]: any }}[] }[] = [
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



  //basic-tab-component function

  handleToggleChange(state: string) {
    this.toggleState = state;
    console.log('state:', state);
  }
  handleRadioButtonChange(state: boolean) {
    this.radioButtonState = state;
    console.log('radioButton:', state ? 'דלוק' : 'מכובה');
  }




}
