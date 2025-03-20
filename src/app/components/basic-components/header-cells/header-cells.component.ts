import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckStateType, CheckType, HeaderCellType } from 'src/app/enums/basic-enum';
import { CheckComponent } from '../check/check.component';

@Component({
  selector: 'yv-cluster-header-cells',
  standalone: true,
  imports: [CheckComponent ,CommonModule],
  templateUrl: './header-cells.component.html',
  styleUrl: './header-cells.component.scss'
})
export class HeaderCellsComponent {
  //variables
  @Input() header: string | undefined;
  @Input() type: HeaderCellType = HeaderCellType.TEXT;
  @Output() sortEvent = new EventEmitter<{ column: string, direction: string }>();
  //injecting ENUM
  HeaderCellType = HeaderCellType;
  CheckType = CheckType
  CheckStateType = CheckStateType
  //functions
  //פונקציה שממינת את העמודה
  sortBy(column: string) {
    if (this.type === 'order' || this.type === HeaderCellType.ORDERDOWN) {
      const direction = this.type === 'order' ? 'asc' : 'desc';
      this.sortEvent.emit({ column, direction });
      this.type = this.type === HeaderCellType.ORDER ? HeaderCellType.ORDERDOWN : HeaderCellType.ORDER;
    }
  }
}
