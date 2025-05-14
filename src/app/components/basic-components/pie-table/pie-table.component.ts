import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, SimpleChanges  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { DataCellType, HeaderCellType} from 'src/app/enums/basic-enum';
import { LOADIPHLPAPI } from 'node:dns';
import { HeaderCellsComponent } from '../header-cells/header-cells.component';

@Component({
  selector: 'yv-cluster-pie-table',
  standalone: true,
  imports: [CommonModule, FormsModule,DataCellsComponent],
  templateUrl: './pie-table.component.html',
  styleUrl: './pie-table.component.scss'
})
export class PieTableComponent {
  @Input() allDatabaseData!: { Count: number, Code: string, Value: string }[];
  @Input() spsipicPlaceData!: {TotalCount:number, Count: number,Code: string, Value: string }[];
  @Input() tableColorsArray!: string[];
  @Input() allDatabaseTotalValue!: { TotalCount: number; Value: string };
  @Input() thePlaceTotalValue!: { TotalCount: number; Value: string };
  tableRows:any= [{'rowName':'Last Name','objectKey':'Value'}, {'rowName':'Count','objectKey':'Count'}, {'rowName':'percent','objectKey':'Count'},{ 'rowName':'Total name count','objectKey':'Code'}];
  totalAllNamesInTheDatabase:number=180056
//enums
  dataCellType = DataCellType;
  headerCellType=HeaderCellType
  //functoins
getValue(subItem: any, key: string): any {
  return subItem[key];
}
  // פונקציה לחישוב אחוז מתוך סכום כללי
  calculatePercentage(part: number,totalValue:number): number {    
    return Math.round((part /totalValue) * 100);
  }

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    // רואים כאן מתי כל Input מתעדכן
    if (changes['allDatabaseData'] || changes['spsipicPlaceData']) {
      // אם צריך לעדכן לוגיקה פנימית או לחשב דברים מחדש, תעשי זאת כאן
      // ואז תכריחי את Angular לרנדר שוב:
      console.log("ngOnChanges(changes: SimpleChanges): void");
      
      this.cdr.detectChanges();
      this.cdr.markForCheck()
    }
}
}
