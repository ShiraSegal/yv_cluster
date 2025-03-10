import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BasicTablePropertyType, DataCellType, HeaderCellType } from 'src/app/enums/basic-enum';


@Component({
  selector: 'yv-cluster-basic-table-warp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-table-warp.component.html',
  styleUrl: './basic-table-warp.component.scss'
})
export class BasicTableWarpComponent {
  
      @Input() title: string  = '';
      @Input() showSelect: boolean = false;
      @Input() data: { property : BasicTablePropertyType ; Headers: { data: string; type: HeaderCellType }[] ; Rows: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[]} = { property : BasicTablePropertyType.NEWֹֹֹֹֹֹ_SUGGESTIONS , Headers: [] , Rows: [] };
    
      DataCellType = DataCellType;
      HeaderCellType = HeaderCellType;
      BasicTablePropertyType = BasicTablePropertyType;

      

      setTab(tab: BasicTablePropertyType.NEWֹֹֹֹֹֹ_SUGGESTIONS | BasicTablePropertyType.OLD_SUGGESTIONS) {
        this.data.property = tab;
      }
}
