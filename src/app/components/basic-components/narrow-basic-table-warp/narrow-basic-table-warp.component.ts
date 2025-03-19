import { Component, Input } from '@angular/core';
import { BasicTablePropertyType, BasicTableRowPropertyVariants } from 'src/app/enums/basic-enum';
import { DataCellType ,HeaderCellType ,AutoClusterTabType } from 'src/app/enums/basic-enum';


@Component({
  selector: 'yv-cluster-narrow-basic-table-warp',
  standalone: true,
  imports: [],
  templateUrl: './narrow-basic-table-warp.component.html',
  styleUrl: './narrow-basic-table-warp.component.scss'
})
export class NarrowBasicTableWarpComponent {

    @Input() title: string  = '';
    @Input() subTitle: string  = '';
    @Input() data: { [tab : AutoClusterTabType] :{ Headers: { data: string; type: HeaderCellType }[] , Rows: { property: BasicTableRowPropertyVariants; showAction: boolean; cells: { data: string; type: DataCellType }[] }[]}} =
    {[AutoClusterTabType.SAPIR_CLUSTERS]: {
      Headers: [
        { data: 'initialization value', type: HeaderCellType.TEXT }
       
      ],
      Rows: [
        { 
          property: BasicTableRowPropertyVariants.DEFAULT, 
          showAction: true, 
          cells: [
            { data: 'initialization value', type: DataCellType.TEXT }
          
          ]
        }
      ]
    }};

   
    currenTab : AutoClusterTabType = AutoClusterTabType.SAPIR_CLUSTERS;
    tabStatus: string = 'active';
  tabText: string = 'Click to change status';

  onTabChange(isActive: boolean) {
    this.tabStatus = isActive ? 'active' : 'not-active';
    this.
  }
    AutoClusterTabType=AutoClusterTabType;
    HeaderCellType=HeaderCellType;
    DataCellType=DataCellType;
    BasicTablePropertyType=BasicTablePropertyType;
    BasicTableRowPropertyVariants=BasicTableRowPropertyVariants;

}
