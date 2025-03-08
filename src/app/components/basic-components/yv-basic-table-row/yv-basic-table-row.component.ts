import { Component, Input } from '@angular/core';
import { YvDataCellsComponent } from '../yv-data-cells/yv-data-cells.component';
import { CommonModule } from '@angular/common';
import { DataCellType } from 'src/app/enums/data-cell-enum';
import { BasicTableRowPropertyVariants } from 'src/app/enums/basic-enum';


@Component({
  selector: 'app-yv-basic-table-row',
  standalone: true,
  imports: [CommonModule,YvDataCellsComponent],
  templateUrl: './yv-basic-table-row.component.html',
  styleUrl: './yv-basic-table-row.component.css'
})
export class YvBasicTableRowComponent {
  @Input() property: BasicTableRowPropertyVariants = BasicTableRowPropertyVariants.DEFAULT; 
  @Input() showAction: boolean = false; 
  @Input() cells: { data: string; type: DataCellType }[] = [];
   
  BasicTableRowPropertyVariants= BasicTableRowPropertyVariants;
  DataCellType = DataCellType;
  
}
