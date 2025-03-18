import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-pie-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pie-table.component.html',
  styleUrl: './pie-table.component.scss'
})
export class PieTableComponent {
  tableRows: string[] = ['Value', 'Count'];
  @Input() allDatabaseData!: { Count: number; Code: string; Value: string }[];
  @Input() spsipicPlaceData!: { Count: number; Code: string; Value: string }[];


}
