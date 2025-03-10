import { Component, Input } from '@angular/core';
import { DataCellType } from 'src/app/enums/data-cell-enum';
import { HeaderCellType } from 'src/app/enums/header-cell-enum';

import { BasicTableRowComponent } from "../basic-table-row/basic-table-row.component";
import { BasicTableRowPropertyVariants } from 'src/app/enums/basic-enum';
import { TableHeaderComponent } from '../table-header/table-header.component';

@Component({
  selector: 'yv-cluster-basic-table',
  standalone: true,
  imports: [TableHeaderComponent , BasicTableRowComponent],
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.scss'
})
export class BasicTableComponent {
  @Input() rows: { property: BasicTableRowPropertyVariants; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [];
  @Input() headers: { data: string; type: HeaderCellType }[] = [];


  DataCellType = DataCellType;
  HeaderCellType = HeaderCellType;
  BasicTableRowPropertyVariants=BasicTableRowPropertyVariants;
}
