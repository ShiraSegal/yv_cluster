import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { DataCellsComponent } from '../data-cells/data-cells.component';
<<<<<<< HEAD
import { BasicTableRowPropertyVariants, DataCellType } from 'src/app/enums/basic-enum';
=======
import { BasicTableRowPropertyVariants } from 'src/app/enums/basic-enum';
import { TabElementComponent } from '../tab-element/tab-element.component';
>>>>>>> origin/yehudit

@Component({
  selector: 'yv-cluster-basic-table-row',
  standalone: true,
  imports: [CommonModule , DataCellsComponent  ,TabElementComponent],
  templateUrl: './basic-table-row.component.html',
  styleUrl: './basic-table-row.component.scss'
})
export class BasicTableRowComponent {
  @Input() property: BasicTableRowPropertyVariants = BasicTableRowPropertyVariants.DEFAULT; 
  @Input() showAction: boolean = false; 
  @Input() cells: { data: string; type: DataCellType }[] = [];
   
  BasicTableRowPropertyVariants= BasicTableRowPropertyVariants;
  DataCellType = DataCellType;
  
}
