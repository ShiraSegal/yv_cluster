import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { BasicTablePropertyType, ButtonType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { DataCellType, HeaderCellType, AutoClusterTabType } from 'src/app/enums/basic-enum';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';
import { FilterNames } from 'src/app/enums/auto-cluster-table-enum';


@Component({
  selector: 'yv-cluster-narrow-basic-table-warp',
  standalone: true,
  imports: [CommonModule, BasicTabComponent, NarrowBasicTableComponent],
  templateUrl: './narrow-basic-table-warp.component.html',
  styleUrl: './narrow-basic-table-warp.component.scss'
})
export class NarrowBasicTableWarpComponent {
  autoClusterTabType = AutoClusterTabType;
  headerCellType = HeaderCellType;
  dataCellType = DataCellType;
  basicTablePropertyType = BasicTablePropertyType;
  narrowBasicTableRowInputState = NarrowBasicTableRowInputState;

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


  currentTab = AutoClusterTabType.SAPIR_CLUSTERS;
  

  filters : FilterNames[] = [
    FilterNames.DATEOFREPORT,
    FilterNames.DATEOFASSIGNEE,
    FilterNames.FILTERBYSTATUS,
    FilterNames.FILTERBYASSIGNEE
  ];
  getFiltersForTab(tabName: AutoClusterTabType): FilterNames[] {
    if (tabName === this.autoClusterTabType.SAPIR_CLUSTERS) {
      return [FilterNames.DATEOFREPORT];
    } else if (tabName === this.autoClusterTabType.MISSING_FIELD) {
      return [FilterNames.DATEOFREPORT,FilterNames.DATEOFASSIGNEE, FilterNames.FILTERBYASSIGNEE,FilterNames.FILTERBYSTATUS];
    } else if (tabName === this.autoClusterTabType.APPROVAL_GROUPS) {
      return [FilterNames.DATEOFREPORT,FilterNames.DATEOFASSIGNEE, FilterNames.FILTERBYASSIGNEE,FilterNames.FILTERBYSTATUS];
    } else if (tabName === this.autoClusterTabType.CHECKLIST_ITEMS) {
      return [FilterNames.DATEOFREPORT,FilterNames.DATEOFASSIGNEE, FilterNames.FILTERBYASSIGNEE,FilterNames.FILTERBYSTATUS];
    } else if (tabName === this.autoClusterTabType.DIFFERENT_CLUSTERS) {
      return [FilterNames.DATEOFREPORT,FilterNames.DATEOFASSIGNEE, FilterNames.FILTERBYASSIGNEE,FilterNames.FILTERBYSTATUS];
    } else if (tabName === this.autoClusterTabType.ERROR_MESSAGES) {
      return [FilterNames.DATEOFREPORT,FilterNames.DATEOFASSIGNEE, FilterNames.FILTERBYASSIGNEE,FilterNames.FILTERBYSTATUS];
    }
    return this.filters;
  }

  tabs = [
    { text: AutoClusterTabType.SAPIR_CLUSTERS, status: true },
    { text: AutoClusterTabType.MISSING_FIELD, status: false },
    { text: AutoClusterTabType.APPROVAL_GROUPS, status: false },
    { text: AutoClusterTabType.DIFFERENT_CLUSTERS, status: false},
    { text: AutoClusterTabType.CHECKLIST_ITEMS, status: false },
    { text: AutoClusterTabType.ERROR_MESSAGES, status: false },

   
  ];
  HeaderToDataCellTypeMap: { [key in HeaderCellType]?: DataCellType } = {
    [HeaderCellType.TEXT]: DataCellType.TEXT, // Default: Text-to-Text
    [HeaderCellType.CHECK]: DataCellType.CHECK, // Checkboxes
    [HeaderCellType.MORE]: DataCellType.MORE,
    [HeaderCellType.ORDER]: DataCellType.TEXT, // Ordered text
    [HeaderCellType.HEADERSEARCH]: DataCellType.TEXT, // Searchable headers
    [HeaderCellType.PLACEOLDER]: DataCellType.PLACEOLDER, // Placeholder
  };
  getDataCellTypeForHeader(header: string, headerType: HeaderCellType): DataCellType {
    if (headerType === HeaderCellType.CHECK) return DataCellType.CHECK; // זיהוי על פי סוג
    if (header === 'Status') return DataCellType.STATUS;
    if (header === 'Assignee') return DataCellType.ASSIGNEE;
    if (header === '') return DataCellType.BUTTON;
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
      { data: 'comment', type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['dateOfReport'], type: HeaderCellType.TEXT }
    ],
    [AutoClusterTabType.MISSING_FIELD]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: 'CNT', type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['clusterID'], type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['MissingField'], type: HeaderCellType.TEXT },
      { data: 'Comments', type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee data', type: HeaderCellType.TEXT }
    ],
    [AutoClusterTabType.APPROVAL_GROUPS]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: this.DBKeyToHeaderMap['groupID'], type: HeaderCellType.TEXT },
      { data: 'score', type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
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
      { data: this.DBKeyToHeaderMap['book_id'], type: HeaderCellType.TEXT },
      { data: this.DBKeyToHeaderMap['clustersIDs'], type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee data', type: HeaderCellType.TEXT },
    ],
    [AutoClusterTabType.ERROR_MESSAGES]: [
      { data: '', type: HeaderCellType.CHECK },
      { data: this.DBKeyToHeaderMap['errorMessage'], type: HeaderCellType.TEXT },
      { data: 'Status', type: HeaderCellType.TEXT },
      { data: 'Assignee', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT },
      { data: 'Assignee data', type: HeaderCellType.TEXT }
    ],
  };

  loadDataForTab() {
    const jsonKey = this.TabToJSONKeyMap[this.currentTab]; // מיפוי הטאב למפתח המתאים
    const tabData = this.tabData?.[jsonKey] || []; // קבלת הנתונים עבור הטאב הנוכחי
    this.Headers = this.TabHeaders[this.currentTab];
    const headerToKeyMap = Object.entries(this.DBKeyToHeaderMap).reduce((acc, [key, value]) => {
      acc[value] = key;
      return acc;
    }, {} as { [key: string]: string });

    this.Rows = tabData.map((item: any) => ({
      property: item,
      showAction: true,
      cells: this.Headers.map(header => {
        const jsonKey = headerToKeyMap[header.data] || header.data;
        const cellData = item[jsonKey] || '';
        const dataCellType = this.getDataCellTypeForHeader(header.data, header.type);

        const cellTemplates: { [key in DataCellType]?: () => any } = {
          [DataCellType.CHECK]: () => ({ data: "", type: DataCellType.CHECK, moreData: {} }),
          [DataCellType.ASSIGNEE]: () => ({ data: "unAssignne", type: DataCellType.ASSIGNEE, moreData: {} }),
          [DataCellType.BUTTON]: () => ({
            data: "",
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


