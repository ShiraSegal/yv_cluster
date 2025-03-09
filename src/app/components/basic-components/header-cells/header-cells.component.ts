import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckComponent } from "../check/check.component";
import { CommonModule } from '@angular/common';
import { HeaderCellType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-header-cells',
  standalone: true,
  imports: [CheckComponent ,CommonModule],
  templateUrl: './header-cells.component.html',
  styleUrl: './header-cells.component.scss'
})
export class HeaderCellsComponent {
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
