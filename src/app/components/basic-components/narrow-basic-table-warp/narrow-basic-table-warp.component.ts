import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { BasicTablePropertyType, ButtonType, CheckStateType, CheckType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { DataCellType, HeaderCellType, AutoClusterTabType } from 'src/app/enums/basic-enum';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';


@Component({
  selector: 'yv-cluster-narrow-basic-table-warp',
  standalone: true,
  imports: [CommonModule, BasicTabComponent, NarrowBasicTableComponent],
  templateUrl: './narrow-basic-table-warp.component.html',
  styleUrl: './narrow-basic-table-warp.component.scss'
})
export class NarrowBasicTableWarpComponent {

  clusterService = inject(ClusterService);
  //enum imports
  autoClusterTabType = AutoClusterTabType;
  headerCellType = HeaderCellType;
  dataCellType = DataCellType;
  basicTablePropertyType = BasicTablePropertyType;
  narrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  checkStateType = CheckStateType;
  checkType = CheckType;

  //data
  data1: any;
  tabData: any;
  @Input() subTitle: string = '';
  @Input() data: Partial<Record<AutoClusterTabType, {
    Headers: { data: string; type: HeaderCellType }[];
    Rows: {
      property: NarrowBasicTableRowInputState;
      showAction: boolean;
      length: NarrowBasicTableRowLength
      cells: {
        data: string;
        type: DataCellType;
        moreData?: { [key: string]: any };
      }[];
    }[]
  }>>
  currentTab = AutoClusterTabType.SAPIR_CLUSTERS;
  Headers: { data: string; type: HeaderCellType }[] = [];
  Rows: {
    property: any;
    showAction: boolean;
    length: NarrowBasicTableRowLength
    cells: {
      data: string;
      type: DataCellType;
      moreData?: { [key: string]: any };
    }[];

  }[] = [];

  readonly TabToJSONKeyMap: { [key in AutoClusterTabType]: string } = {
    [AutoClusterTabType.SAPIR_CLUSTERS]: 'ClustersForSapir',
    [AutoClusterTabType.MISSING_FIELD]: 'ClustersWithMissingFields',
    [AutoClusterTabType.ERROR_MESSAGES]: 'ErrorMessages',
    [AutoClusterTabType.APPROVAL_GROUPS]: 'GroupsForClusterApprovalSystem',
    [AutoClusterTabType.DIFFERENT_CLUSTERS]: 'GroupsWithDifferentClusters',
    [AutoClusterTabType.CHECKLIST_ITEMS]: 'ItemsForCheckList',
  };

  tabs = [
    { text: AutoClusterTabType.SAPIR_CLUSTERS, status: true },
    { text: AutoClusterTabType.MISSING_FIELD, status: false },
    { text: AutoClusterTabType.APPROVAL_GROUPS, status: false },
    { text: AutoClusterTabType.DIFFERENT_CLUSTERS, status: false },
    { text: AutoClusterTabType.CHECKLIST_ITEMS, status: false },
    { text: AutoClusterTabType.ERROR_MESSAGES, status: false },
  ];

  readonly DBKeyToHeaderMap: { [key: string]: string } = {
    clusterID: 'Cluster ID',
    MissingField: 'Missing field',
    status: 'Status',
    assignee: 'Assignee',
    dateOfReport: 'Date of report',
    assigneeData: 'Assignee data',
    book_id: 'Book ID',
    clustersIDs: 'Clusters ID',
    errorMessage: 'Error message',
    groupID: 'Group ID',
  };

  HeaderToDataCellTypeMap: { [key in HeaderCellType]?: DataCellType } = {
    [HeaderCellType.TEXT]: DataCellType.TEXT, // Default: Text-to-Text
    [HeaderCellType.CHECK]: DataCellType.CHECK, // Checkboxes
    [HeaderCellType.PLACEOLDER]: DataCellType.PLACEOLDER, // Placeholder
  };

  readonly TabHeaders: { [key in AutoClusterTabType]: { data: string, type: HeaderCellType }[] } = {
    [AutoClusterTabType.SAPIR_CLUSTERS]: [
      { data: 'Check', type: HeaderCellType.CHECK },
      { data: this.DBKeyToHeaderMap['clusterID'], type: HeaderCellType.TEXT },
      { data: 'comment', type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['dateOfReport'], type: HeaderCellType.TEXT }
    ],
    [AutoClusterTabType.MISSING_FIELD]: [
      { data: 'Check', type: HeaderCellType.CHECK },
      { data: 'CNT', type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['clusterID'], type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['MissingField'], type: HeaderCellType.TEXT },
      { data: 'Comments', type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee date', type: HeaderCellType.TEXT }
    ],
    [AutoClusterTabType.APPROVAL_GROUPS]: [
      { data: 'Check', type: HeaderCellType.CHECK },
      { data: this.DBKeyToHeaderMap['groupID'], type: HeaderCellType.TEXT },
      { data: 'score', type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee date', type: HeaderCellType.TEXT },
      { data: 'Button', type: HeaderCellType.TEXT }
    ],
    [AutoClusterTabType.CHECKLIST_ITEMS]: [
      { data: 'Check', type: HeaderCellType.CHECK },
      { data: 'Group ID', type: HeaderCellType.TEXT },
      { data: 'Score', type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee date', type: HeaderCellType.TEXT },
      { data: 'Button', type: HeaderCellType.TEXT }
    ],
    [AutoClusterTabType.DIFFERENT_CLUSTERS]: [
      { data: 'Check', type: HeaderCellType.CHECK },
      { data: this.DBKeyToHeaderMap['book_id'], type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['clustersIDs'], type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee date', type: HeaderCellType.TEXT },
    ],
    [AutoClusterTabType.ERROR_MESSAGES]: [
      { data: 'Check', type: HeaderCellType.CHECK },
      { data: this.DBKeyToHeaderMap['errorMessage'], type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee date', type: HeaderCellType.TEXT }
    ],
  };
  getDataCellTypeForHeader(header: string, headerType: HeaderCellType): DataCellType {
    if (headerType === HeaderCellType.CHECK) return DataCellType.CHECK; // זיהוי על פי סוג
    if (header === 'Status') return DataCellType.STATUS;
    if (header === 'Assignee') return DataCellType.ASSIGNEE;
    if (header === 'Button') return DataCellType.BUTTON;
    return DataCellType.TEXT; // ברירת מחדל
  }

  getDataForCurrentTab(): any[] {
    const jsonKey = this.TabToJSONKeyMap[this.currentTab];
    return this.tabData?.[jsonKey] || [];
  }

  setActiveTab(tabText: AutoClusterTabType) {
    this.tabs = this.tabs.map((tab) => ({
      ...tab,
      status: tab.text === tabText ? true : false

    }));
    this.currentTab = tabText;
    this.loadDataForTab(); // טען מחדש את הנתונים לטאב הנוכחי
  }

  loadDataForTab() {
    const jsonKey = this.TabToJSONKeyMap[this.currentTab]; // מיפוי הטאב למפתח המתאים
    const tabData = this.tabData?.[jsonKey] || []; // קבלת הנתונים עבור הטאב הנוכחי
    this.Headers = this.TabHeaders[this.currentTab];
    const headerToKeyMap = Object.entries(this.DBKeyToHeaderMap).reduce((acc, [key, value]) => {
      acc[value] = key;
      return acc;
    }, {} as { [key: string]: string });

    this.Rows = tabData.map((item: any) => ({
      property: item.property,
      showAction: true,
      length: NarrowBasicTableRowLength.LONG,
      cells: this.Headers.map(header => {
        const jsonKey = headerToKeyMap[header.data] || header.data;
        const cellData = item[jsonKey] || '';
        const dataCellType = this.getDataCellTypeForHeader(header.data, header.type);

        const cellTemplates: { [key in DataCellType]?: () => any } = {
          [DataCellType.CHECK]: () => ({ data: "check", type: DataCellType.CHECK, moreData: { type: this.checkType.UNCHECKED, state: this.checkStateType.ENABLED } }),
          [DataCellType.ASSIGNEE]: () => ({ data: "unAssignne", type: DataCellType.ASSIGNEE, moreData: {} }),
          [DataCellType.BUTTON]: () => ({
            data: "Button",
            type: DataCellType.BUTTON,
            moreData: { buttonType: ButtonType.SECONDARY, text: 'open', isBig: false },
          }),
        };
        return cellTemplates[dataCellType]?.() || { data: cellData, type: dataCellType, moreData: {} };
      }),
    }));
  }

  ngOnInit() {
    this.clusterService.getAutoClusterData();
    this.clusterService.autoClusterListSubject$.subscribe((data) => {
      this.tabData = data; // שמירת הנתונים ב-tabData
      this.loadDataForTab(); // טען את הנתונים לטבלה
    });
  }
}


