import { CommonModule } from "@angular/common";
import { CheckComponent } from "../basic-components/check/check.component";
import { SliderComponent } from "../basic-components/slider/slider.component";
import { Component } from "@angular/core";
import { CheckStateType, CheckType } from "src/app/enums/check-enum";
import { AutoClusterTabType, BadgeType, BasicTableRowPropertyVariants, ButtonIcon, ButtonSize, ButtonType, CardIcons, DataCellType, HeaderCellType, IconButtonLargeType, NarrowBasicTableRowInputState, SliderNavigationTabType, State, StatusActiveOrNotActive } from 'src/app/enums/basic-enum';
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
import { NarrowBasicTableWarpComponent } from "../basic-components/narrow-basic-table-warp/narrow-basic-table-warp.component";
@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [
    NarrowBasicTableWarpComponent,
    IconButtonComponent,
    SliderComponent,
    CheckComponent,
    BadgeComponent,
    AssigneeComponent,
    DataCellsComponent,
    HeaderCellsComponent,
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

  //data-----------------------------------------------------------------------
   
  customData = {
    [AutoClusterTabType.SAPIR_CLUSTERS]: {
      Headers: [{ data: '', type: HeaderCellType.CHECK },
        { data: 'Cluster ID', type: HeaderCellType.TEXT },
        { data: 'Comments', type: HeaderCellType.TEXT },
        { data: 'Date of report', type: HeaderCellType.TEXT }

      ],
      Rows: [
        {
          property: NarrowBasicTableRowInputState.DEFAULT,
          showAction: false,
          cells: [{ data: 'CustomCell', type: DataCellType.CHECK }]
        },
        {
          property: NarrowBasicTableRowInputState.DEFAULT,
          showAction: false,
          cells: [{ data: 'CustomCell', type: DataCellType.TEXT }]
        },{
          property: NarrowBasicTableRowInputState.DEFAULT,
          showAction: false,
          cells: [{ data: 'CustomCell', type: DataCellType.TEXT }]
        },
        {
          property: NarrowBasicTableRowInputState.DEFAULT,
          showAction: false,
          cells: [{ data: 'CustomCell', type: DataCellType.TEXT }]
        }
      ]
    },
  
  [AutoClusterTabType.MISSING_FIELD]: {
    Headers: [{ data: '', type: HeaderCellType.CHECK },
      { data: 'fdhfghj ID', type: HeaderCellType.TEXT },
      { data: 'Comments', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT }

    ],
    Rows: [
      {
        property: NarrowBasicTableRowInputState.DEFAULT,
        showAction: false,
        cells: [{ data: 'CustomCell', type: DataCellType.CHECK }]
      },
      {
        property: NarrowBasicTableRowInputState.DEFAULT,
        showAction: false,
        cells: [{ data: 'CustomCell', type: DataCellType.TEXT }]
      },{
        property: NarrowBasicTableRowInputState.DEFAULT,
        showAction: false,
        cells: [{ data: 'CustomCell', type: DataCellType.TEXT }]
      },
      {
        property: NarrowBasicTableRowInputState.DEFAULT,
        showAction: false,
        cells: [{ data: 'CustomCell', type: DataCellType.TEXT }]
      }
    ]
  }};

  customSubtitle = 'Custom Subtitle';

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
  AutoClusterTabType=AutoClusterTabType;
  narrowBasicTableRowInputState=NarrowBasicTableRowInputState;
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



  //functions-----------------------------------------------------------------------
  //header-cell- sort function
  handleSort(event: { column: string, direction: string }) {
    console.log(`Sorting by ${event.column} in ${event.direction} order`);
  }
  //switch-component function
  handleSwitchChange(state: boolean) {
    this.switchState = state;
    console.log('Switch:', state ? 'דלוק' : 'מכובה');
  }
  //basic-tab-component function
  handleTabChange(state: boolean) {
    this.tabState = state;
    console.log('Tab:', state ? 'דלוק' : 'מכובה');
  }
  //button & icon button component function
  onClick() {
    alert('test on click');
    console.log('test on click');
  }
}

