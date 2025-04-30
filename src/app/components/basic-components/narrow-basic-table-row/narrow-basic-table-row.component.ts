import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonIcon, ButtonSize, ButtonType, DataCellType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';

import { DataCellsComponent } from '../data-cells/data-cells.component';
import { IconType } from 'src/app/enums/icon-enum';

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
  }[] = [];
  DataCellType = DataCellType;

}
