import { Component, inject } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { YvAssigneeComponent } from './components/basic-components/yv-assignee/yv-assignee.component';
import { YvBasicTableComponent } from './components/basic-components/yv-basic-table/yv-basic-table.component';
import { YvBasicTableRowComponent } from './components/basic-components/yv-basic-table-row/yv-basic-table-row.component';
import { YvCheckComponent } from './components/basic-components/yv-check/yv-check.component';
import { YvDataCellsComponent } from './components/basic-components/yv-data-cells/yv-data-cells.component';
import { YvHeaderCellsComponent } from './components/basic-components/yv-header-cells/yv-header-cells.component';
import { YvInputComponent } from './components/basic-components/yv-input/yv-input.component';
import { YvSelectComponent } from './components/basic-components/yv-select/yv-select.component';
import { YvTableHeaderComponent } from './components/basic-components/yv-table-header/yv-table-header.component';
import { YvTextareaComponent } from './components/basic-components/yv-textarea/yv-textarea.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet,YvAssigneeComponent,YvBasicTableComponent,YvBasicTableRowComponent,YvCheckComponent,YvDataCellsComponent,YvHeaderCellsComponent,YvInputComponent,YvSelectComponent,YvTableHeaderComponent,YvTextareaComponent],
})
export class AppComponent {
  title = 'yv-clusters';


  handleSort(event: { column: string, direction: string }) {
    // Implement your sorting logic here
    console.log(`Sorting by ${event.column} in ${event.direction} order`);
  }

}
