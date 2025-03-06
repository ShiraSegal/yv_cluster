import { Component, input, Input } from '@angular/core';
import { TabElementComponent } from '../tab-element/tab-element.component';


import { CommonModule } from '@angular/common';
import { YvHeaderCellsComponent } from '../yv-header-cells/yv-header-cells.component';
import { YvBasicTableRowComponent } from '../yv-basic-table-row/yv-basic-table-row.component';
import { DataCellType } from 'src/app/enums/data-cell-enum';
import { YvTableHeaderComponent } from "../yv-table-header/yv-table-header.component";
import { HeaderCellType } from 'src/app/enums/header-cell-enum';

@Component({
  selector: 'app-yv-basic-table',
  standalone: true,
  imports: [TabElementComponent, CommonModule, YvHeaderCellsComponent, YvBasicTableRowComponent, YvTableHeaderComponent],
  templateUrl: './yv-basic-table.component.html',
  styleUrl: './yv-basic-table.component.css'
})
export class YvBasicTableComponent {

    @Input() showSelect: boolean = false;
    @Input() property: 'New Suggestions' | 'Old Suggestions' = 'New Suggestions';
    @Input() newHeaders: { data: string; type: HeaderCellType }[] = [];
    @Input() oldHeaders: { data: string; type: HeaderCellType }[] = [];
    @Input() newRows: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [];
    @Input() oldRows: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [];
    get headers() {
      return this.property === 'New Suggestions' ? this.newHeaders : this.oldHeaders;
    }
    get rows() {
      return this.property === 'New Suggestions' ? this.newRows : this.oldRows;
    }
    setTab(tab: 'New Suggestions' | 'Old Suggestions') {
      this.property = tab;
    }
  // מימוש בשביל הטאב
//   tabState: boolean = false;
// handleTabChange(state: boolean) {
//   this.tabState = state;
// }
 
// }
}