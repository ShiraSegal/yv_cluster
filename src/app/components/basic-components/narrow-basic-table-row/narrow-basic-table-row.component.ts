import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataCellType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
 
import { DataCellsComponent } from '../data-cells/data-cells.component';
 
@Component({
  selector: 'yv-cluster-narrow-basic-table-row',
  standalone: true,
  imports: [CommonModule ,DataCellsComponent],
  templateUrl: './narrow-basic-table-row.component.html',
  styleUrl: './narrow-basic-table-row.component.scss'
})
export class NarrowBasicTableRowComponent {
  @Input() property: NarrowBasicTableRowInputState  = NarrowBasicTableRowInputState.DEFAULT ;
  @Input() cells: { data: string; type: DataCellType }[] = [];
  DataCellType = DataCellType;
}