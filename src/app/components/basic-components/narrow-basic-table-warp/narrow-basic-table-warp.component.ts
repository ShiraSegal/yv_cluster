import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { BasicTablePropertyType, BasicTableRowPropertyVariants, NarrowBasicTableRowInputState, StatusActiveOrNotActive } from 'src/app/enums/basic-enum';
import { DataCellType, HeaderCellType, AutoClusterTabType } from 'src/app/enums/basic-enum';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ClusterService } from 'src/app/services/cluster.service';


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
  missingFieldData: any[] = [];
  data1: any ;
  tabData: any; 

  clusterService = inject(ClusterService);

 readonly TabToJSONKeyMap: { [key in AutoClusterTabType]: string } = {
    [AutoClusterTabType.SAPIR_CLUSTERS]: 'ClustersForSapir',
    [AutoClusterTabType.MISSING_FIELD]: 'ClustersWithMissingFields',
    [AutoClusterTabType.ERROR_MESSAGES]: 'ErrorMessages',
    [AutoClusterTabType.APPROVAL_GROUPS]: 'GroupsForClusterApprovalSystem',
    [AutoClusterTabType.DIFFERENT_CLUSTERS]: 'GroupsWithDifferentClusters',
    [AutoClusterTabType.CHECKLIST_ITEMS]: 'ItemsForCheckList',
  };

 constructor() {
  debugger
  this.data1 = this.clusterService.getAutoClusterData().subscribe((data) => {
    this.tabData = data
  })
 }
 getDataForCurrentTab(): any[] {
  const jsonKey = this.TabToJSONKeyMap[this.currentTab];
  return this.tabData?.[jsonKey] || []; 
}

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
       
        ]
      },
      [AutoClusterTabType.MISSING_FIELD]: {
        Headers: [{ data: '', type: HeaderCellType.CHECK },
          { data: 'CNT ', type: HeaderCellType.TEXT },
          { data: 'Cluster ID ', type: HeaderCellType.TEXT },
          { data: 'Missing field ', type: HeaderCellType.TEXT },
          { data: 'Comments ', type: HeaderCellType.TEXT },
          { data: 'Status ', type: HeaderCellType.TEXT },
          { data: 'Assignee ', type: HeaderCellType.TEXT },
          { data: 'Date of report ', type: HeaderCellType.TEXT },
          { data: 'Assinee date ', type: HeaderCellType.TEXT }

          ],
        Rows:  [] = this.missingFieldData
      }
    }
    
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


