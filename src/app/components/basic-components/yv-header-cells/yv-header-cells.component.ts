import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YvCheckComponent } from '../yv-check/yv-check.component';
import { HeaderCellType } from 'src/app/enums/header-cell-enum';


@Component({
  selector: 'app-yv-header-cells',
  standalone: true,
  imports: [CommonModule,YvCheckComponent],
  templateUrl: './yv-header-cells.component.html',
  styleUrl: './yv-header-cells.component.css'
})
export class YvHeaderCellsComponent {
  @Input() header: string | undefined;
  @Input() type: HeaderCellType = HeaderCellType.TEXT;
  @Output() sortEvent = new EventEmitter<{ column: string, direction: string }>();
  HeaderCellType = HeaderCellType;
  sortBy(column: string) {
    if (this.type === 'order' || this.type === HeaderCellType.ORDERDOWN) {
      const direction = this.type === 'order' ? 'asc' : 'desc';
      this.sortEvent.emit({ column, direction });

      // Toggle the type between 'order' and 'order-down'
      this.type = this.type === HeaderCellType.ORDER ? HeaderCellType.ORDERDOWN : HeaderCellType.ORDER;
    }
  }
}
