import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasicTablePropertyType, BasicTableRowPropertyVariants } from 'src/app/enums/basic-enum';
import { DataCellType } from 'src/app/enums/data-cell-enum';
import { HeaderCellType } from 'src/app/enums/header-cell-enum';
import { BasicTableComponent } from '../basic-table/basic-table.component';
import { CommonModule } from '@angular/common';
import { TabElementComponent } from '../tab-element/tab-element.component';

@Component({
  selector: 'yv-cluster-basic-table-warp',
  standalone: true,
  imports: [BasicTableComponent ,CommonModule , TabElementComponent],
  templateUrl: './basic-table-warp.component.html',
  styleUrl: './basic-table-warp.component.scss'
})
export class BasicTableWarpComponent {

      @Input() title: string  = '';
      @Input() showSelect: boolean = false;
      @Input() data: { property : BasicTablePropertyType ; Headers: { data: string; type: HeaderCellType }[] ; Rows: { property: BasicTableRowPropertyVariants; showAction: boolean; cells: { data: string; type: DataCellType }[] }[]} = { property: BasicTablePropertyType.NEWֹֹֹֹֹֹ_SUGGESTIONS, Headers: [], Rows: [] };
      DataCellType = DataCellType;
      HeaderCellType = HeaderCellType;
      BasicTablePropertyType = BasicTablePropertyType;
      BasicTableRowPropertyVariants=BasicTableRowPropertyVariants;

      currentHeaders: { data: string; type: HeaderCellType }[] = [];
      currentRows: { property: BasicTableRowPropertyVariants; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [];

    getDataForTab(tab: BasicTablePropertyType) {
      const tabData = this.data.property[tab];
      if (tabData) {
        this.currentHeaders = tabData.Headers;
        this.currentRows = tabData.Rows;
      }
    }

      setTab(tab: BasicTablePropertyType) {
        this.data.property = tab;
        this.getDataForTab(tab);
      }
    }
    
