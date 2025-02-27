import { Component, Input } from '@angular/core';
import { YvHeaderCellsComponent } from '../yv-header-cells/yv-header-cells.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yv-table-header',
  standalone: true,
  imports: [YvHeaderCellsComponent,CommonModule],
  templateUrl: './yv-table-header.component.html',
  styleUrl: './yv-table-header.component.css'
})
export class YvTableHeaderComponent {
  @Input() headers: string[] = []; 
}
