import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { BasicTablePropertyType, ButtonType, NarrowBasicTableRowInputState, StatusActiveOrNotActive } from 'src/app/enums/basic-enum';
import { DataCellType, HeaderCellType, AutoClusterTabType } from 'src/app/enums/basic-enum';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { SlidebarNavigationComponent } from '../slidebar-navigation/slidebar-navigation.component';
import { IconType } from 'src/app/enums/icon-enum';


@Component({
  selector: 'yv-cluster-narrow-basic-table-warp',
  standalone: true,
  imports: [CommonModule, BasicTabComponent, NarrowBasicTableComponent, SlidebarNavigationComponent],
  templateUrl: './narrow-basic-table-warp.component.html',
  styleUrl: './narrow-basic-table-warp.component.scss'
})
export class NarrowBasicTableWarpComponent {
  AutoClusterTabType = AutoClusterTabType;
  HeaderCellType = HeaderCellType;
  DataCellType = DataCellType;
  BasicTablePropertyType = BasicTablePropertyType;
  narrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  StatusActiveOrNotActive = StatusActiveOrNotActive;
  // missingFieldData: any[] = [];
  data1: any;
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


  @Input() subTitle: string = '';
  @Input() data: Partial<Record<AutoClusterTabType, {
    Headers: { data: string; type: HeaderCellType }[];
    Rows: {
      property: NarrowBasicTableRowInputState;
      showAction: boolean;
      cells: {
        data: string;
        type: DataCellType;
        moreData?: { [key: string]: any };
      }[];
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
        Rows: []
      }
    }

  currentTab = AutoClusterTabType.SAPIR_CLUSTERS;
  tabs = [
    { text: AutoClusterTabType.SAPIR_CLUSTERS, status: StatusActiveOrNotActive.ACTIVE },
    { text: AutoClusterTabType.MISSING_FIELD, status: StatusActiveOrNotActive.NOT_ACTIVE },
    { text: AutoClusterTabType.ERROR_MESSAGES, status: StatusActiveOrNotActive.NOT_ACTIVE },
    { text: AutoClusterTabType.DIFFERENT_CLUSTERS, status: StatusActiveOrNotActive.NOT_ACTIVE },
    { text: AutoClusterTabType.CHECKLIST_ITEMS, status: StatusActiveOrNotActive.NOT_ACTIVE },
    { text: AutoClusterTabType.APPROVAL_GROUPS, status: StatusActiveOrNotActive.NOT_ACTIVE }

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
    // comment: 'Comments',
    missingField: 'Missing field',
    status: 'Status',
    assignee: 'Assignee',
    dateOfReport: 'Date of report',
    assigneeData: 'Assignee data',
  };

  Headers: { data: string; type: HeaderCellType }[] = [];
  Rows: {
    property: any;
    showAction: boolean;
    cells: {
      data: string;
      type: DataCellType;
      moreData?: { [key: string]: any };
    }[];
  }[] = [];
  readonly TabHeaders: { [key in AutoClusterTabType]: { data: string, type: HeaderCellType }[] } = {
    [AutoClusterTabType.SAPIR_CLUSTERS]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: this.DBKeyToHeaderMap['clusterID'], type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['comment'], type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['dateOfReport'], type: HeaderCellType.TEXT }
    ],
    [AutoClusterTabType.MISSING_FIELD]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: 'CNT', type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['clusterID'], type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['missingField'], type: HeaderCellType.TEXT },
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
  // Map HeaderCellType to DataCellType dynamically
 HeaderToDataCellTypeMap: { [key in HeaderCellType]?: DataCellType } = {
  [HeaderCellType.TEXT]: DataCellType.TEXT, // Default: Text-to-Text
  [HeaderCellType.CHECK]: DataCellType.CHECK, // Checkboxes
  [HeaderCellType.MORE]: DataCellType.MORE,
  [HeaderCellType.ORDER]: DataCellType.TEXT, // Ordered text
  [HeaderCellType.HEADERSEARCH]: DataCellType.TEXT, // Searchable headers
  [HeaderCellType.PLACEOLDER]: DataCellType.PLACEOLDER, // Placeholder
};

// Special Cases: Custom logic to map header labels to data-cell types
getDataCellTypeForHeader(header: string, headerType: HeaderCellType): DataCellType {
  if (headerType === HeaderCellType.CHECK) return DataCellType.CHECK; // זיהוי על פי סוג
  if (header === 'Status') return DataCellType.STATUS;
  if (header === 'Assignee') return DataCellType.ASSIGNEE;
  if (header === '') return DataCellType.BUTTON;
  return DataCellType.TEXT; // ברירת מחדל
}
loadDataForTab() {
  const tabData = this.getDataForCurrentTab();
  this.Headers = this.TabHeaders[this.currentTab];

  const headerToKeyMap = Object.entries(this.DBKeyToHeaderMap).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {} as { [key: string]: string });

  this.Rows = tabData.map((item: any) => ({
    property: item,
    showAction: true,
    cells: this.Headers.map(header => {
      const jsonKey = headerToKeyMap[header.data] || header.data; // Map header name to JSON key
      const cellData = item[jsonKey] || ''; // Get the cell data, default to an empty string

      // Get DataCellType dynamically
      const dataCellType = this.getDataCellTypeForHeader(header.data, header.type);

      if (dataCellType === DataCellType.CHECK) {
        return {
          data: "",
          type: DataCellType.CHECK,
          moreData: {},
        };
      } else if (dataCellType === DataCellType.ASSIGNEE) {
        return {
          data: "Racheli Liff",
          type: DataCellType.ASSIGNEE,
          moreData: {},
        };
      
      }  else if (dataCellType === DataCellType.BUTTON) {
        return {
          data: "",
          type: DataCellType.BUTTON,
          moreData: {['buttonType']: ButtonType.SECONDARY, ['text']: 'open',['isBig']: false,},
        };
      
      } else {
        return {
          data: cellData,
          type: dataCellType,
          moreData: {},
        };
      }
    }),
  }));
}
   async ngOnInit() {
    this.data1 = (await this.clusterService.getAutoClusterData()).subscribe({
      next: (data) => {
        this.tabData = data
      },
      error: (error) => {
        console.error("error getAutoClusterData occurred:", error);
      }});
    this.loadDataForTab();
  }


}