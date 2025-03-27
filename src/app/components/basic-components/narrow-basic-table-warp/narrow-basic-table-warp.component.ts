import { Component, Input } from '@angular/core';
import { BasicTablePropertyType, BasicTableRowPropertyVariants } from 'src/app/enums/basic-enum';
import { DataCellType } from 'src/app/enums/data-cell-enum';
import { HeaderCellType } from 'src/app/enums/header-cell-enum';
import { NarrowBasicTableTabType } from 'src/app/enums/narrow-basic-table-tab-enum';

@Component({
  selector: 'yv-cluster-narrow-basic-table-warp',
  standalone: true,
  imports: [],
  templateUrl: './narrow-basic-table-warp.component.html',
  styleUrl: './narrow-basic-table-warp.component.scss'
})
export class NarrowBasicTableWarpComponent {

    @Input() title: string  = '';
    @Input() text: string  = '';
    @Input() data: { tab : NarrowBasicTableTabType ; Headers: { data: string; type: HeaderCellType }[] ; Rows: { property: BasicTableRowPropertyVariants; showAction: boolean; cells: { data: string; type: DataCellType }[] }[]} = { property: BasicTablePropertyType.NEWֹֹֹֹֹֹ_SUGGESTIONS, Headers: [], Rows: [] };
   
    NarrowBasicTableTabType =NarrowBasicTableTabType;
    HeaderCellType=HeaderCellType;
    DataCellType=DataCellType;
    BasicTableRowPropertyVariants=BasicTableRowPropertyVariants;

}
