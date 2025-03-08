import { Component } from '@angular/core';
import { ButtonType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';

import { HeaderCellType } from 'src/app/enums/header-cell-enum';
import { DataCellType } from 'src/app/enums/data-cell-enum';
import { AssigneeComponent } from '../basic-components/assignee/assignee.component';
import { BasicTableComponent } from '../basic-components/basic-table/basic-table.component';
import { BasicTableRowComponent } from '../basic-components/basic-table-row/basic-table-row.component';
import { BasicTableWarpComponent } from '../basic-components/basic-table-warp/basic-table-warp.component';
import { CheckComponent } from '../basic-components/check/check.component';
import { DataCellsComponent } from '../basic-components/data-cells/data-cells.component';
import { HeaderCellsComponent } from '../basic-components/header-cells/header-cells.component';
import { NarrowBasicTableComponent } from '../basic-components/narrow-basic-table/narrow-basic-table.component';
import { SliderComponent } from '../basic-components/slider/slider.component';
import { TabElementComponent } from '../basic-components/tab-element/tab-element.component';
import { TableHeaderComponent } from '../basic-components/table-header/table-header.component';
import { TextareaComponent } from '../basic-components/textarea/textarea.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [AssigneeComponent,BasicTableComponent,BasicTableRowComponent,BasicTableWarpComponent,CheckComponent,DataCellsComponent,HeaderCellsComponent,NarrowBasicTableComponent,SliderComponent,TabElementComponent,TableHeaderComponent,TextareaComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {

  btnType = ButtonType.PRIMARY;
  btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
 

  title = 'yv-clusters';
  HeaderCellType = HeaderCellType;
  DataCellType = DataCellType;

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
}
