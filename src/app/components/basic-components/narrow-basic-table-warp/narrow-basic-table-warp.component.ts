import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BasicTablePropertyType, BasicTableRowPropertyVariants, NarrowBasicTableRowInputState, StatusActiveOrNotActive } from 'src/app/enums/basic-enum';
import { DataCellType, HeaderCellType, AutoClusterTabType } from 'src/app/enums/basic-enum';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';


@Component({
  selector: 'yv-cluster-narrow-basic-table-warp',
  standalone: true,
  imports: [CommonModule, BasicTabComponent ,NarrowBasicTableComponent],
  templateUrl: './narrow-basic-table-warp.component.html',
  styleUrl: './narrow-basic-table-warp.component.scss'
})
export class NarrowBasicTableWarpComponent {
  AutoClusterTabType = AutoClusterTabType;
  HeaderCellType = HeaderCellType;
  DataCellType = DataCellType;
  BasicTablePropertyType = BasicTablePropertyType;
  narrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  StatusActiveOrNotActive=StatusActiveOrNotActive;

  @Input() subTitle: string = '';
  @Input() data: Partial<Record<AutoClusterTabType, {
    Headers: { data: string; type: HeaderCellType }[];
    Rows: {
      property: NarrowBasicTableRowInputState;
      showAction: boolean;
      cells: { data: string; type: DataCellType }[]
    }[]
  }>> =
    {
      [AutoClusterTabType.SAPIR_CLUSTERS]: {
        Headers: [{ data: '', type: HeaderCellType.CHECK },
          { data: 'Cluster ID ', type: HeaderCellType.TEXT },
          { data: 'Comments ', type: HeaderCellType.TEXT },
          { data: 'Date of report ', type: HeaderCellType.TEXT }
          ],
        Rows:  [
          {
            property: this.narrowBasicTableRowInputState.DEFAULT,
            showAction: false,
            cells: [
              { data: '', type: DataCellType.CHECK },
              { data: '454682', type: DataCellType.TEXT },
              { data: 'New', type: DataCellType.TEXT },
              { data: '01/01/2005', type: DataCellType.TEXT }
            ]
          }
        ]
      }
    };
  currentTab = AutoClusterTabType.SAPIR_CLUSTERS;
  tabs = [
    { text: AutoClusterTabType.SAPIR_CLUSTERS, status: StatusActiveOrNotActive.ACTIVE },
    { text: AutoClusterTabType.MISSING_FIELD, status: StatusActiveOrNotActive.NOT_ACTIVE },
    { text: AutoClusterTabType.ERROR_MESSAGES, status:  StatusActiveOrNotActive.NOT_ACTIVE },
    { text: AutoClusterTabType.DIFFERENT_CLUSTERS, status:  StatusActiveOrNotActive.NOT_ACTIVE },
    { text: AutoClusterTabType.CHECKLIST_ITEMS, status:  StatusActiveOrNotActive.NOT_ACTIVE },
    { text: AutoClusterTabType.APPROVAL_GROUPS, status:  StatusActiveOrNotActive.NOT_ACTIVE }

  ];

  setActiveTab(tabText: AutoClusterTabType) {
    this.tabs = this.tabs.map((tab, index) => ({
      ...tab,
      status: tab.text === tabText ? StatusActiveOrNotActive.ACTIVE : StatusActiveOrNotActive.NOT_ACTIVE

    }));
    this.currentTab = tabText;
  }
 

}
