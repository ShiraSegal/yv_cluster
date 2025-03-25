import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { DataCellType} from 'src/app/enums/basic-enum';
import { LOADIPHLPAPI } from 'node:dns';

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
  @Input() allDatabaseTotalValue!: { TotalCount: number; Value: string };
  @Input() thePlaceTotalValue!: { TotalCount: number; Value: string };
  
  DataCellType = DataCellType;
getValue(subItem: any, key: string): any {
  return subItem[key];
}

  // פונקציה לחישוב אחוז מתוך סכום כללי
  calculatePercentage(part: number,totalValue:number): number {    
    return Math.round((part /totalValue) * 100);
  }

}
