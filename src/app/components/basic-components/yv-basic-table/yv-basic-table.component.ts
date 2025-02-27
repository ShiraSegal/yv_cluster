import { Component, Input } from '@angular/core';
import { TabElementComponent } from '../tab-element/tab-element.component';


import { CommonModule } from '@angular/common';
import { YvHeaderCellsComponent } from '../yv-header-cells/yv-header-cells.component';
import { YvBasicTableRowComponent } from '../yv-basic-table-row/yv-basic-table-row.component';
import { DataCellType } from 'src/app/enums/data-cell-enum';

@Component({
  selector: 'app-yv-basic-table',
  standalone: true,
  imports: [TabElementComponent, CommonModule, YvHeaderCellsComponent, YvBasicTableRowComponent],
  templateUrl: './yv-basic-table.component.html',
  styleUrl: './yv-basic-table.component.css'
})
export class YvBasicTableComponent {
  @Input() property: 'New Suggestions' | 'Old Suggestions' = 'New Suggestions'; // ✅ סוג חזק יותר
  @Input() showSelect: boolean = false; // ✅ האם להציג עמודת CHECK
  @Input() rows: { name: string; cells: { data: string; type: DataCellType }[] }[] = []; // ✅ מערך דינאמי של שורות

  protected readonly DataCellType = DataCellType;

  /** 🏆 פונקציה שמחזירה את הכותרות בהתאם ל-property */
  getTableHeaders(): string[] {
    return this.property === 'New Suggestions'
      ? ['Home List', 'To Do']
      : ['Home List', 'Done', 'To Do'];
  }

  /** 🏆 פונקציה ל-trackBy עבור ביצועים טובים יותר */
  trackByIndex(index: number, _: any): number {
    return index;
  }
}
