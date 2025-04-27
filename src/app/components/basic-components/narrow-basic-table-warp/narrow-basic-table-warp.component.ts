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
  // missingFieldData: any[] = [];
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

//  constructor() {
//   debugger
//   this.data1 = this.clusterService.getAutoClusterData().subscribe((data) => {
//     this.tabData = data
//   })
//  }

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
          // { data: 'ClusterID ', type: HeaderCellType.TEXT },
          // { data: 'comment ', type: HeaderCellType.TEXT },
          // { data: 'Date of report ', type: HeaderCellType.TEXT }
          ],
        Rows: [] 
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
        Rows:  [] 
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
  getDataForCurrentTab(): any[] {
    const jsonKey = this.TabToJSONKeyMap[this.currentTab];
    return this.tabData?.[jsonKey] || []; 
  }

  setActiveTab(tabText: AutoClusterTabType) {
    this.tabs = this.tabs.map((tab, index) => ({
      ...tab,
      status: tab.text === tabText ? StatusActiveOrNotActive.ACTIVE : StatusActiveOrNotActive.NOT_ACTIVE

    }));
    this.currentTab = tabText;
    this.loadDataForTab();
  }
  readonly DBKeyToHeaderMap: { [key: string]: string } = {
    clusterID: 'Cluster ID',
    comment: 'Comments',
    missingField: 'MissingField',
    status: 'Status',
    assignee: 'Assignee',
    dateOfReport: 'Date of report',
    assigneeData: 'Assignee data',
  };
  
  Headers: { data: string; type: HeaderCellType }[] = [];
  Rows: {
    property: any;
    showAction: boolean;
    cells: { data: string; type: DataCellType }[];
  }[] = [];
  readonly TabHeaders: { [key in AutoClusterTabType]: { data: string, type: HeaderCellType }[] } = {
    [AutoClusterTabType.SAPIR_CLUSTERS]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: 'clusterID', type: HeaderCellType.TEXT },
      { data: 'comment', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT }
    ],
    [AutoClusterTabType.MISSING_FIELD]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: 'CNT', type: HeaderCellType.TEXT },
      { data: 'clusterID', type: HeaderCellType.TEXT },
      { data: 'MissingField ', type: HeaderCellType.TEXT },
      { data: 'Comments', type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee data', type: HeaderCellType.TEXT }

    ],
    [AutoClusterTabType.APPROVAL_GROUPS]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: 'groupID', type: HeaderCellType.TEXT },
      { data: 'score', type: HeaderCellType.TEXT },
      { data: 'link', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee data', type: HeaderCellType.TEXT },
      { data: '', type: HeaderCellType.TEXT }

    ],
    [AutoClusterTabType.CHECKLIST_ITEMS]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: 'Group ID', type: HeaderCellType.TEXT },
      { data: 'Score', type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee data', type: HeaderCellType.TEXT },
      { data: '', type: HeaderCellType.TEXT }
    ],
 
    [AutoClusterTabType.DIFFERENT_CLUSTERS]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: 'Cluster ID', type: HeaderCellType.TEXT },
      { data: 'Difference Details', type: HeaderCellType.TEXT }
    ],
    [AutoClusterTabType.ERROR_MESSAGES]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: 'Error Message', type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee data', type: HeaderCellType.TEXT }

    ],
    
  };
  // Fetch data for the current tab and map it to the table format
  loadDataForTab() {
    debugger;
  const tabData = this.getDataForCurrentTab(); 

    // Set headers for the current tab
    this.Headers = this.TabHeaders[this.currentTab];

    // Map rows for the current tab
    this.Rows = tabData.map((item: any) => ({
      property: item,
      showAction: true,
      cells: this.Headers.map(header => ({
        data: item[header.data] || '', // Match data with header labels
        type: DataCellType.TEXT
      }))
    }));
  }
  async ngOnInit() {
    this.data1 = (await this.clusterService.getAutoClusterData()).subscribe((data) => {
      this.tabData = data
    })
    this.loadDataForTab();
  }


}


