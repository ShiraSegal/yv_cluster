import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ButtonIcon, ButtonSize, ButtonType, DataCellType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';

import { DataCellsComponent } from '../data-cells/data-cells.component';
import { IconType } from 'src/app/enums/icon-enum';
import { CheckType } from 'src/app/enums/check-enum';
import { log } from 'console';

@Component({
  selector: 'yv-cluster-narrow-basic-table-row',
  standalone: true,
  imports: [CommonModule, DataCellsComponent],
  templateUrl: './narrow-basic-table-row.component.html',
  styleUrl: './narrow-basic-table-row.component.scss'
})
export class NarrowBasicTableRowComponent {
  @Input() property: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;
  @Input() cells: {
    data: string | {
      text?: string;
      buttonType?: ButtonType;
      disabled?: boolean;
      isBig?: boolean; // Changed from size
      iconType?: IconType; // Changed from buttonIcon
    };
    type: DataCellType;
    moreData?: { [key: string]: any }; 
  }[] = [];
  @Output() checkStatus= new EventEmitter<CheckType>();
  @Output() bookIdToDelet= new EventEmitter<string>();
  DataCellType = DataCellType;


  checkChange(checkStatus:CheckType) {
    this.checkStatus.emit(checkStatus);
    console.log("NarrowBasicTableRowComponent check status", checkStatus)
  }
  onDeletObject() {
    this.bookIdToDelet.emit(typeof this.cells[1].data === 'string'?this.cells[1].data :" ");
}
}
