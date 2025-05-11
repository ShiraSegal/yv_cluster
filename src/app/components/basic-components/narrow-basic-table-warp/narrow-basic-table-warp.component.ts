import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { BasicTablePropertyType, ButtonType, NarrowBasicTableRowInputState, StatusActiveOrNotActive } from 'src/app/enums/basic-enum';
import { DataCellType, HeaderCellType, AutoClusterTabType } from 'src/app/enums/basic-enum';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { SlidebarNavigationComponent } from '../slidebar-navigation/slidebar-navigation.component';
import { FormGroup } from '@angular/forms';



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
      status: tab.text === tabText ? StatusActiveOrNotActive.ACTIVE : StatusActiveOrNotActive.NOT_ACTIVE
    }));
    this.currentTab = tabText;
  
    console.log('Active Tab Updated:', this.currentTab); // בדיקה שהטאב הנוכחי מתעדכן
    console.log('Tab Data Before Load:', this.tabData); // בדיקה של הנתונים לפני טעינת הטאב
    this.loadDataForTab(); // טען מחדש את הנתונים לטאב הנוכחי
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

  loadDataForTab() {
    const jsonKey = this.TabToJSONKeyMap[this.currentTab]; // מיפוי הטאב למפתח המתאים
    console.log('Mapped JSON Key:', jsonKey); // בדיקה של המפתח הממופה
    const tabData = this.tabData?.[jsonKey] || []; // קבלת הנתונים עבור הטאב הנוכחי
    console.log('Mapped Tab Data:', tabData); // בדיקה של הנתונים הממופים
    console.log('Current Tab:', this.currentTab);
    if (!tabData.length) {
      console.warn('No data available for the current tab'); // הודעה אם אין נתונים
      return;
    }
  
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
  
        if (dataCellType === DataCellType.CHECK) {
          return { data: "", type: DataCellType.CHECK, moreData: {} };
        } else if (dataCellType === DataCellType.ASSIGNEE) {
          return { data: item.assignee || "Racheli Liff", type: DataCellType.ASSIGNEE, moreData: {} };
        } else if (dataCellType === DataCellType.BUTTON) {
          return { data: "", type: DataCellType.BUTTON, moreData: { ['buttonType']: ButtonType.SECONDARY, ['text']: 'open', ['isBig']: false } };
        } else {
          return { data: cellData, type: dataCellType, moreData: {} };
        }
      }),
    }));
  }

  async ngOnInit() {
    console.log('Initializing component...');
    await this.clusterService.getAutoClusterData();
  
    this.clusterService.autoClusterListSubject$.subscribe((data) => {
      console.log('Data received in component:', data); // בדיקה שהנתונים מגיעים
      this.tabData = data; // שמירת הנתונים ב-tabData
      console.log('Tab Data After Fetch:', this.tabData); // בדיקה של הנתונים לאחר הטעינה
      this.loadDataForTab(); // טען את הנתונים לטבלה
    });
  }




}


