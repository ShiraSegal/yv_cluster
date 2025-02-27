import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { YvAssigneeComponent } from '../yv-assignee/yv-assignee.component';
import { YvCheckComponent } from '../yv-check/yv-check.component';
import { DataCellType } from '../../../enums/data-cell-enum';

@Component({
  selector: 'app-yv-data-cells',
  standalone: true,
  imports: [CommonModule, YvAssigneeComponent, YvCheckComponent],
  templateUrl: './yv-data-cells.component.html',
  styleUrl: './yv-data-cells.component.css'
})
export class YvDataCellsComponent {
  @Input() data: string | undefined;
  @Input() type: DataCellType = DataCellType.TEXT; 
  @Input() lineDataCells: boolean = false ;


  protected readonly DataCellType = DataCellType;
}
