import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { AssigneeComponent } from "../assignee/assignee.component";
import { SliderComponent } from "../slider/slider.component";
import { DataCellType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-data-cells',
  standalone: true,
  imports: [CommonModule, AssigneeComponent, SliderComponent],
  templateUrl: './data-cells.component.html',
  styleUrl: './data-cells.component.scss'
})
export class DataCellsComponent {
 @Input() data: string | undefined  ;
  @Input() type: DataCellType = DataCellType.TEXT; 
  @Input() lineDataCells: boolean = false ;

  protected readonly DataCellType = DataCellType;
}
