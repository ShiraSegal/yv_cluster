import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { BasicTableRowPropertyVariants, DataCellType, IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';

@Component({
  selector: 'yv-cluster-basic-table-row',
  standalone: true,
  imports: [CommonModule , DataCellsComponent,IconButtonLargeComponent],
  templateUrl: './basic-table-row.component.html',
  styleUrl: './basic-table-row.component.scss'
})
export class BasicTableRowComponent {
  @Input() property: BasicTableRowPropertyVariants = BasicTableRowPropertyVariants.DEFAULT; 
  @Input() showAction: boolean = false; 
  @Input() cells: { data: string; type: DataCellType }[] = [];
   
  basicTableRowPropertyVariants= BasicTableRowPropertyVariants;
  dataCellType = DataCellType;
    iconButtonLargeType = IconButtonLargeType;
    iconType = IconType;
}
