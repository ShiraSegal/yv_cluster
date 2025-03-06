import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { DataCellType } from 'src/app/enums/data-cell-enum';
import { YvDataCellsComponent } from '../yv-data-cells/yv-data-cells.component';

@Component({
  selector: 'yv-cluster-narrow-basic-table-row',
  standalone: true,
  imports: [CommonModule,YvDataCellsComponent],
  templateUrl: './narrow-basic-table-row.component.html',
  styleUrl: './narrow-basic-table-row.component.scss'
})
export class NarrowBasicTableRowComponent {
  @Input() property: NarrowBasicTableRowInputState  = NarrowBasicTableRowInputState.DEFAULT ; 
  @Input() cells: { data: string; type: DataCellType }[] = []; 
  DataCellType = DataCellType;

  changeState(newState: NarrowBasicTableRowInputState) {
    this.property = newState;
  }

 
}
