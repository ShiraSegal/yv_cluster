import { Component, Input } from '@angular/core';
import { YvDataCellsComponent } from '../yv-data-cells/yv-data-cells.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yv-basic-table-row',
  standalone: true,
  imports: [YvDataCellsComponent,CommonModule],
  templateUrl: './yv-basic-table-row.component.html',
  styleUrl: './yv-basic-table-row.component.css'
})
export class YvBasicTableRowComponent {
  @Input() nameList: string = '';
  @Input() done: string = '';
  @Input() toDo: string = '';
  @Input() property: string = '';
  @Input() showaction: boolean = false;
  @Input() type: string = '';
}