import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { DataCellType} from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-pie-table',
  standalone: true,
  imports: [CommonModule, FormsModule,DataCellsComponent],
  templateUrl: './pie-table.component.html',
  styleUrl: './pie-table.component.scss'
})
export class PieTableComponent {
  tableRows:any= [{'rowName':'Last Name','objectKey':'Value'}, {'rowName':'Count','objectKey':'Count'}, {'rowName':'percent','objectKey':'Count'},{ 'rowName':'Total name count','objectKey':'Code'}];
  @Input() allDatabaseData!: { Count: number, Code: string, Value: string }[];
  @Input() spsipicPlaceData!: {TotalCount:number, Count: number,Code: string, Value: string }[];
  @Input() tableColorsArray!: string[];
  DataCellType = DataCellType;
getValue(subItem: any, key: string): any {
  return subItem[key];
}
}
