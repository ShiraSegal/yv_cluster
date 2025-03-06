import { Component } from '@angular/core';
import { ButtonType } from 'src/app/enums/basic-enum';
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

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [YvBasicTableComponent,CommonModule,YvSliderComponent,YvAssigneeComponent,YvBasicTableComponent,YvBasicTableRowComponent,YvCheckComponent,YvDataCellsComponent,YvHeaderCellsComponent,YvInputComponent,YvSelectComponent,YvTableHeaderComponent,YvTextareaComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  btnType = ButtonType.PRIMARY;
  btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
  // txt1 = "test btn1"

  title = 'yv-clusters';
  HeaderCellType = HeaderCellType;

  handleSort(event: { column: string, direction: string }) {

    console.log(`Sorting by ${event.column} in ${event.direction} order`);
  }

  onClick()
  {
    alert('test on click');
    console.log('test on click');
  }
  headers: { data: string; type: HeaderCellType }[] = [
    { data: 'name list', type: HeaderCellType.TEXT },
    { data: 'to do', type: HeaderCellType.TEXT },
  ];

  rows: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [
    {
      property: 'Default',
      showAction: false,
      cells: [
        { data: 'Data 1', type: DataCellType.TEXT },
        { data: 'Link to something', type: DataCellType.LINK },
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
    { data: 'to do', type: HeaderCellType.TEXT },
    { data: 'name list', type: HeaderCellType.TEXT },
    { data: 'to do', type: HeaderCellType.TEXT },
  ];

  rows1: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [
    {
      property: 'Default',
      showAction: false,
      cells: [
        { data: 'Data 1', type: DataCellType.TEXT },
        { data: 'Link to something', type: DataCellType.LINK },
        { data: 'Data 1', type: DataCellType.TEXT },
        { data: 'Link to something', type: DataCellType.LINK },
      ]
    },
    {
      property: 'Default',
      showAction: false,
      cells: [
        { data: 'Data 2', type: DataCellType.TEXT },
        { data: 'Link to something', type: DataCellType.LINK },
             { data: 'Data 1', type: DataCellType.TEXT },
        { data: 'Link to something', type: DataCellType.LINK },
       
      ]
    }
  ];
}
