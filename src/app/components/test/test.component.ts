import { Component } from '@angular/core';
import { ButtonType, CardIcons, ToastNotificationIcons } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { TempButtonComponent } from '../basic-components/temp-button/temp-button.component';
// import { YvSliderComponent } from '../basic-components/yv-slider/yv-slider.component';
// import { HeaderCellType } from 'src/app/enums/header-cell-enum';
// import { YvAssigneeComponent } from '../basic-components/yv-assignee/yv-assignee.component';
// import { YvBasicTableComponent } from '../basic-components/yv-basic-table/yv-basic-table.component';
// import { YvBasicTableRowComponent } from '../basic-components/yv-basic-table-row/yv-basic-table-row.component';
// import { YvDataCellsComponent } from '../basic-components/yv-data-cells/yv-data-cells.component';
// import { YvHeaderCellsComponent } from '../basic-components/yv-header-cells/yv-header-cells.component';
// import { YvInputComponent } from '../basic-components/yv-input/yv-input.component';
// import { YvSelectComponent } from '../basic-components/yv-select/yv-select.component';
// import { YvTableHeaderComponent } from '../basic-components/yv-table-header/yv-table-header.component';
// import { YvTextareaComponent } from '../basic-components/yv-textarea/yv-textarea.component';
// import { YvCheckComponent } from '../basic-components/yv-check/yv-check.component';
import { SwitchComponent } from '../basic-components/switch/switch.component';
import { BasicTabComponent } from '../basic-components/basic-tab/basic-tab.component';
import { BasicCardComponent } from '../basic-components/basic-card/basic-card.component';
import { BasicRadioButtonComponent } from '../basic-components/basic-radio-button/basic-radio-button.component';
import { BasicToggleComponent } from '../basic-components/basic-toggle/basic-toggle.component';
import { FilterSectionComponent } from '../basic-components/filter-section/filter-section.component';
import { ToastNotificationComponent } from '../basic-components/toast-notification/toast-notification.component';
import { PieComponentDistributionModalComponent } from '../basic-components/pie-component-distribution-modal/pie-component-distribution-modal.component';
import { RadioButtonListComponent } from '../basic-components/radio-button-list/radio-button-list.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [CommonModule, TempButtonComponent,TempButtonComponent,BasicTabComponent,BasicCardComponent,BasicRadioButtonComponent,BasicToggleComponent,FilterSectionComponent,ToastNotificationComponent,SwitchComponent,PieComponentDistributionModalComponent,RadioButtonListComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

//   btnType = ButtonType.PRIMARY;
//   btnType2 = ButtonType.SECONDARY;
//   txt1 = "test btn1"
//   // txt1 = "test btn1"

//   title = 'yv-clusters';
//   HeaderCellType = HeaderCellType;
//   // txt1 = "test btn1"
//   switchState: boolean = false;
//   tabState: boolean = false;
//   toggleState!: string;
//   radioButtonState: boolean = false;
//   CardIcons = CardIcons;
//   ToastNotificationIcons = ToastNotificationIcons;
//   selectedOption: string = '';
// radioButtonArray:string [] = ["a", "b", "c", "d","other"];
//   handleSort(event: { column: string, direction: string }) {

//     console.log(`Sorting by ${event.column} in ${event.direction} order`);
//   }

//   onClick()
//   {
//     alert('test on click');
//     console.log('test on click');
//   }

//   handleSwitchChange(state: boolean) {
//     this.switchState = state;
//     console.log('Switch:', state ? 'דלוק' : 'מכובה');
//   }

//   handleTabChange(state: boolean) {
//     this.tabState = state;
//     console.log('Tab:', state ? 'דלוק' : 'מכובה');
//   }
//   handleToggleChange(state: string) {
//     this.toggleState = state;
//     console.log('state:', state);
//   }
//   handleRadioButtonChange(state: boolean) {
//     this.radioButtonState = state;
//     console.log('radioButton:', state ? 'דלוק' : 'מכובה');
//   }
//   onRadioSelectionChange(selectedValue: string) {
//     this.selectedOption = selectedValue;
//     console.log("האפשרות שנבחרה:", this.selectedOption);
//   }
}
