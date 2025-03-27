import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-pie-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pie-table.component.html',
  styleUrl: './pie-table.component.scss'
})
export class PieTableComponent {
  tableRows: string[] = ['Last Name', 'Count', 'percent', 'Total name count'];

}
