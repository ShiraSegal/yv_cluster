import { Component } from '@angular/core';
import { ButtonType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
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
import { DataCellType } from 'src/app/enums/data-cell-enum';
import { NarrowBasicTableRowComponent } from '../basic-components/narrow-basic-table-row/narrow-basic-table-row.component';
import { AssigneeComponent } from '../basic-components/assignee/assignee.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [AssigneeComponent,NarrowBasicTableRowComponent,YvBasicTableComponent, CommonModule, TempButtonComponent, YvSliderComponent, YvAssigneeComponent, YvBasicTableComponent, YvBasicTableRowComponent, YvCheckComponent, YvDataCellsComponent, YvHeaderCellsComponent, YvInputComponent, YvSelectComponent, YvTableHeaderComponent, YvTextareaComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  DataCellType = DataCellType;
  btnType = ButtonType.PRIMARY;
  btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
 

  title = 'yv-clusters';
  HeaderCellType = HeaderCellType;

  property: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;
  property2: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.HOVER;
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
        { data: 'Data ', type: DataCellType.TEXT },
        { data: 'Data ', type: DataCellType.TEXT },
        { data: '', type: DataCellType.CHECK },

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
}
