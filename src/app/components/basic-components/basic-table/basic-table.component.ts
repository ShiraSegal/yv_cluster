import { Component, Input } from '@angular/core';
import { BasicTableRowComponent } from "../basic-table-row/basic-table-row.component";
import { BasicTableRowPropertyVariants, DataCellType, HeaderCellType } from 'src/app/enums/basic-enum';
import { TableHeaderComponent } from '../table-header/table-header.component';

@Component({
  selector: 'yv-cluster-basic-table',
  standalone: true,
  imports: [TableHeaderComponent , BasicTableRowComponent],
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.scss'
})
export class BasicTableComponent {
  @Input() headers: { data: string; type: HeaderCellType }[] = [];
  @Input() rows: {
    property: any;
    showAction: boolean;
    cells: {
        data: string;
        type: DataCellType;
        moreData?: { [key: string]: any };
    }[];
}[] = []; 
  dataCellType = DataCellType;
  headerCellType = HeaderCellType;
  basicTableRowPropertyVariants=BasicTableRowPropertyVariants;
}
