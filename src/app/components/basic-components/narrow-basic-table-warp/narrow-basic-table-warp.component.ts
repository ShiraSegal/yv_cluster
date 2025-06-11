import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input } from '@angular/core';
import { BadgeType, BasicTablePropertyType, ButtonType, CheckStateType, CheckType, IconButtonLargeType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { DataCellType, HeaderCellType, AutoClusterTabType } from 'src/app/enums/basic-enum';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';
import { FilterNames } from 'src/app/enums/auto-cluster-table-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yv-cluster-narrow-basic-table-warp',
  standalone: true,
  imports: [CommonModule, BasicTabComponent, NarrowBasicTableComponent],
  templateUrl: './narrow-basic-table-warp.component.html',
  styleUrl: './narrow-basic-table-warp.component.scss',
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
  buttonType = ButtonType;
  //data

  tabData: any;
  @Input() subTitle: string = '';
  currentTab = AutoClusterTabType.SAPIR_CLUSTERS;
  Headers: { [key in AutoClusterTabType]?: { data: string }[] } = {};
  Rows: { [key in AutoClusterTabType]?: any[][] } = {};

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
  tabs = [
    { text: AutoClusterTabType.SAPIR_CLUSTERS, status: true },
    { text: AutoClusterTabType.MISSING_FIELD, status: false },
    { text: AutoClusterTabType.APPROVAL_GROUPS, status: false },
    { text: AutoClusterTabType.DIFFERENT_CLUSTERS, status: false },
    { text: AutoClusterTabType.CHECKLIST_ITEMS, status: false },
    { text: AutoClusterTabType.ERROR_MESSAGES, status: false },
  ];
  subscription: Subscription = new Subscription();


  ngOnInit() {
    this.clusterService.getAutoClusterData();
    this.subscription.add(this.clusterService.getAutoClusterData().subscribe((data) => {
      this.tabData = data; // שמירת הנתונים ב-tabData
      this.loadDataForTab(); // טען את הנתונים לטבלה
    }))
  }
 ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }

  setActiveTab(tabText: AutoClusterTabType) {
    this.tabs = this.tabs.map((tab) => ({
      ...tab,
      status: tab.text === tabText ? true : false
    }));
    this.currentTab = tabText;
  }
  loadDataForTab() {
    this.tabs?.forEach((tab) => {
      const jsonKey = this.TabToJSONKeyMap[tab.text]; // מיפוי הטאב למפתח המתאים
      const tabData = this.tabData?.[jsonKey] || []; // קבלת הנתונים עבור הטאב הנוכחי

      // יצירת Headers דינמיים
      this.Headers[tab.text] = this.generateHeadersFromData(tabData);

      // יצירת Rows דינמיים
      this.Rows[tab.text] = this.generateCellsFromRow(tabData, this.Headers[tab.text]);
    });
  }

  generateHeadersFromData(data: any[]): { data: string }[] {
    if (!data.length) return [{ data: 'CHECK' }]; // אם אין נתונים, החזר אובייקט עם 'CHECK'

    const keys = Object.keys(data[0]); // קבלת המפתחות מהאובייקט הראשון
    let headers: { data: string }[] = keys.map((key) => {
      return { data: key }; // החזר את המפתח ככותרת
    });

    // הוסף אובייקט 'CHECK' בתחילת המערך
    headers.unshift({ data: 'check' });
    return headers;
  }

  generateCellsFromRow(data: any[], headers: { data: string }[]): any[][] {
    return data.map((row) => {
      return headers.map((header) => {
        return row[header.data] || ''; // קבלת הנתון מהשורה לפי הכותרת
      });
    });
  }



}



