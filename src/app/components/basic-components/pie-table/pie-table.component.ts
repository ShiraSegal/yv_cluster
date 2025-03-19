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
  tableRows:any= [{'rowName':'Last Name','objectKey':'Value'}, {'rowName':'Count','objectKey':'Count'}, {'rowName':'percent','objectKey':'Count'},{ 'rowName':'Total name count','objectKey':'Code'}];
  @Input() allDatabaseData!: { Count: number, Code: string, Value: string }[];
  @Input() spsipicPlaceData!: {TotalCount:number, Count: number,Code: string, Value: string }[];

getValue(subItem: any, key: string): any {
  return subItem[key];
}
}
