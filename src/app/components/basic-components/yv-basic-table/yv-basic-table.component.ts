import { Component, Input } from '@angular/core';
import { TabElementComponent } from '../tab-element/tab-element.component';

import { YvTableHeaderComponent } from '../yv-table-header/yv-table-header.component';
import { YvDataCellsComponent } from '../yv-data-cells/yv-data-cells.component';
import { CommonModule } from '@angular/common';
import { YvHeaderCellsComponent } from '../yv-header-cells/yv-header-cells.component';
import { YvBasicTableRowComponent } from '../yv-basic-table-row/yv-basic-table-row.component';

@Component({
  selector: 'app-yv-basic-table',
  standalone: true,
  imports: [TabElementComponent,YvTableHeaderComponent,YvDataCellsComponent,CommonModule,YvHeaderCellsComponent,YvBasicTableRowComponent],
  templateUrl: './yv-basic-table.component.html',
  styleUrl: './yv-basic-table.component.css'
})
export class YvBasicTableComponent {
@Input() property : string = '';
tabState: boolean = false;
handleTabChange(state: boolean) {
  this.tabState = state;
  console.log('מצב ה-Tab:', state ? 'דלוק' : 'מכובה');
}
handleSort(event: { column: string, direction: string }) {
  // Implement your sorting logic here
  console.log(`Sorting by ${event.column} in ${event.direction} order`);
}
}
