import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { BadgeType, BasicTablePropertyType, ButtonType, CheckStateType, CheckType, IconButtonLargeType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { DataCellType, HeaderCellType, AutoClusterTabType } from 'src/app/enums/basic-enum';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';
import { FilterNames } from 'src/app/enums/auto-cluster-table-enum';
import { IconType } from 'src/app/enums/icon-enum';

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

  tabData: any;
  @Input() subTitle: string = '';
  currentTab = AutoClusterTabType.SAPIR_CLUSTERS;
  Headers: { [key in AutoClusterTabType]?: { data: string; type: HeaderCellType }[] } = {};
  Rows: {
    [key in AutoClusterTabType]?: {
      property: any;
      showAction: boolean;
      length: NarrowBasicTableRowLength;
      cells: {
        data: string;
        type: DataCellType;
        moreData?: { [key: string]: any };
      }[];
    }[];
  } = {};

  readonly TabToJSONKeyMap: { [key in AutoClusterTabType]: string } = {
    [AutoClusterTabType.SAPIR_CLUSTERS]: 'ClustersForSapir',
    [AutoClusterTabType.MISSING_FIELD]: 'ClustersWithMissingFields',
    [AutoClusterTabType.ERROR_MESSAGES]: 'ErrorMessages',
    [AutoClusterTabType.APPROVAL_GROUPS]: 'GroupsForClusterApprovalSystem',
    [AutoClusterTabType.DIFFERENT_CLUSTERS]: 'GroupsWithDifferentClusters',
    [AutoClusterTabType.CHECKLIST_ITEMS]: 'ItemsForCheckList',
  };

  filters: FilterNames[] = [
    FilterNames.DATE_OF_REPORT,
    FilterNames.DATE_OF_ASSIGNEE,
    FilterNames.FILTER_BY_STATUS,
    FilterNames.FILTER_BY_ASSIGNEE
  ];

  filtersDictionary: { [key in AutoClusterTabType]: FilterNames[] } = {
    [this.autoClusterTabType.SAPIR_CLUSTERS]: [FilterNames.DATE_OF_REPORT],
    [this.autoClusterTabType.MISSING_FIELD]: [
      FilterNames.DATE_OF_REPORT,
      FilterNames.DATE_OF_ASSIGNEE,
      FilterNames.FILTER_BY_ASSIGNEE,
      FilterNames.FILTER_BY_STATUS,
    ],
    [this.autoClusterTabType.APPROVAL_GROUPS]: [
      FilterNames.DATE_OF_REPORT,
      FilterNames.DATE_OF_ASSIGNEE,
      FilterNames.FILTER_BY_ASSIGNEE,
      FilterNames.FILTER_BY_STATUS,
    ],
    [this.autoClusterTabType.CHECKLIST_ITEMS]: [
      FilterNames.DATE_OF_REPORT,
      FilterNames.DATE_OF_ASSIGNEE,
      FilterNames.FILTER_BY_ASSIGNEE,
      FilterNames.FILTER_BY_STATUS,
    ],
    [this.autoClusterTabType.DIFFERENT_CLUSTERS]: [
      FilterNames.DATE_OF_REPORT,
      FilterNames.DATE_OF_ASSIGNEE,
      FilterNames.FILTER_BY_ASSIGNEE,
      FilterNames.FILTER_BY_STATUS,
    ],
    [this.autoClusterTabType.ERROR_MESSAGES]: [
      FilterNames.DATE_OF_REPORT,
      FilterNames.DATE_OF_ASSIGNEE,
      FilterNames.FILTER_BY_ASSIGNEE,
      FilterNames.FILTER_BY_STATUS,
    ],
  };

  // initializeFiltersForTab() {
  //   const newFilters: FilterNames[] = [];

  //   // Add filters based on conditions
  //   newFilters.push(FilterNames.DATE_OF_REPORT); // Always include this filter

  //   if (this.currentTab === this.autoClusterTabType.MISSING_FIELD) {
  //     newFilters.push(FilterNames.DATE_OF_ASSIGNEE);
  //     newFilters.push(FilterNames.FILTER_BY_ASSIGNEE);
  //   }

  //   if (this.currentTab === this.autoClusterTabType.APPROVAL_GROUPS) {
  //     newFilters.push(FilterNames.FILTER_BY_STATUS);
  //   }

  //   if (this.currentTab === this.autoClusterTabType.ERROR_MESSAGES) {
  //     newFilters.push(FilterNames.FILTER_BY_ASSIGNEE);
  //   }

  //   // Update the filters array for the current tab
  //   this.filtersDictionary[this.currentTab] = newFilters;
  // }
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
    dateOfReport: 'Date of report',
    clustersIDs: 'Clusters ID',
    errorMessage: 'Error message',
    groupID: 'Group ID',
    assigneeDate: 'Assignee date',
    assignee: 'Assignee',
    status: 'Status',
    bookId: 'Book ID',
    score: 'Score',
    comments: 'Comments',
    comment:'Comment',
  };
  readonly HeaderToDBKeyMap: { [key: string]: string } = {
    'Cluster ID': 'clusterID',
    'Missing field': 'MissingField',
    'Date of report': 'dateOfReport',
    'Clusters ID': 'clustersIDs',
    'Error message': 'errorMessage',
    'Group ID': 'groupID',
    'Assignee date': 'assigneeDate',
    'Assignee': 'assignee',
    'Status': 'status',
    'Book ID': 'bookId',
    'Score': 'score',
    'Comments': 'comments',
    'Comment': 'comment',
  };

  ngOnInit() {
    this.clusterService.getAutoClusterData();
    this.clusterService.autoClusterListSubject$.subscribe((data) => {
      this.tabData = data; // שמירת הנתונים ב-tabData
      this.loadDataForTab(); // טען את הנתונים לטבלה
    });
  }
  getDataCellTypeForHeader(header: string, headerType: HeaderCellType): DataCellType {
    if (header === 'Status') return DataCellType.STATUS;
    if (header === 'Assignee') return DataCellType.ASSIGNEE;
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
    //this.loadDataForTab(); // טען מחדש את הנתונים לטאב הנוכחי
  }

  loadDataForTab() {
    this.tabs?.forEach((tab) => {
      const jsonKey = this.TabToJSONKeyMap[tab.text]; // מיפוי הטאב למפתח המתאים
      const tabData = this.tabData?.[jsonKey] || []; // קבלת הנתונים עבור הטאב הנוכחי
  
      // יצירת Headers דינמיים
      this.Headers[tab.text] = this.generateHeadersFromData(tabData, tab.text);
  
      // יצירת Rows דינמיים
      this.Rows[tab.text] = tabData.map((item: any) => ({
        property: item.property || null,
        showAction: true,
        length: NarrowBasicTableRowLength.LONG,
        cells: this.generateCellsFromRow(item, this.Headers[tab.text], tab.text)
      }));
    });
  }
  generateHeadersFromData(data: any[], tabType: AutoClusterTabType): { data: string; type: HeaderCellType }[] {
    if (!data.length) return []; // אם אין נתונים, החזר מערך ריק
  
    const keys = Object.keys(data[0]); // קבלת המפתחות מהאובייקט הראשון
    let headers :{ data: string; type: HeaderCellType }[] = keys.map((key) => {
     
      let headerType = HeaderCellType.TEXT; // ברירת מחדל
  
      // שימוש במפה DBKeyToHeaderMap אם המפתח קיים, אחרת השארת המפתח המקורי
      const headerName = this.DBKeyToHeaderMap[key] || key;
  
      return { data: headerName, type: headerType };
    });

    headers = [{ data: 'Check', type: HeaderCellType.CHECK }, ...headers];
  
    if (tabType === AutoClusterTabType.APPROVAL_GROUPS || tabType === AutoClusterTabType.CHECKLIST_ITEMS) {
      headers.push({ data: 'Button', type: HeaderCellType.PLACEOLDER });
    }
  
    return headers;
  }
  generateCellsFromRow(row: any, headers: { data: string; type: HeaderCellType }[], tabType: AutoClusterTabType): { data: string; type: DataCellType; moreData?: { [key: string]: any } }[] {
    let cells = headers.map((header) => {
      const headerName = this.HeaderToDBKeyMap[header.data.toString()] || header.data; // קבלת שם העמודה מהמפה או השארת השם המקורי
      const cellData = row[headerName] || ''; // קבלת הנתונים מהשורה
      const dataCellType = this.getDataCellTypeForHeader(header.data, header.type); // קביעת סוג התא
  
      // יצירת מידע נוסף (moreData) לפי סוג התא
      const moreData = this.getMoreDataForCell(dataCellType, cellData);
  
      return { data: cellData, type: dataCellType, moreData };
    });
  
    // הוספת Check בתחילת השורה עם סוג CHECK
    cells = [{ data: 'Check', type: DataCellType.CHECK, moreData: { type: this.checkType.UNCHECKED, state: this.checkStateType.ENABLED } }, ...cells];
  
    // הוספת Button בסוף השורה עבור טאבים מסוימים
    if (tabType === AutoClusterTabType.APPROVAL_GROUPS || tabType === AutoClusterTabType.CHECKLIST_ITEMS) {
      cells.push({ data: 'Button', type: DataCellType.BUTTON, moreData: { buttonType: ButtonType.SECONDARY, text: 'Open', isBig: false } });
    }
  
    return cells;
  }

  getMoreDataForCell(dataCellType: DataCellType, cellData: any): { [key: string]: any } {
    switch (dataCellType) {
      case DataCellType.STATUS:
        return { property: BadgeType.TODO };
      case DataCellType.ICON:
        return {
          icon: IconType.CHEVRON_RIGHT_LIGHT,
          property: IconButtonLargeType.DEFAULT
        };
      default:
        return {};
    }
  }
}



