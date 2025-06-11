import { Component, inject, Input } from '@angular/core';
import { BasicTablePropertyType, BasicTableRowPropertyVariants, HeaderCellType, HomeTableTabType, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { DataCellType } from 'src/app/enums/basic-enum';
import { BasicTableComponent } from '../basic-table/basic-table.component';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../heading/heading.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';


@Component({
  selector: 'yv-cluster-basic-table-warp',
  standalone: true,
  imports: [
    BasicTableComponent, CommonModule, HeadingComponent, BasicTabComponent],
  templateUrl: './basic-table-warp.component.html',
  styleUrl: './basic-table-warp.component.css'
})
export class BasicTableWarpComponent {

  @Input() title: string;
  @Input() showSelect: boolean = false;
  @Input() data: Partial<Record<HomeTableTabType, {
    Headers: { data: string; type: HeaderCellType }[];
    Rows: {
      property: BasicTableRowPropertyVariants;
      showAction: boolean;
      cells: {
        data: string;
        type: DataCellType;
        moreData?: { [key: string]: any };
      }[];
    }[]
  }>>
  homeTableData: any;
  dataCellType = DataCellType;
  headerCellType = HeaderCellType;
  basicTablePropertyType = BasicTablePropertyType;
  basicTableRowPropertyVariants = BasicTableRowPropertyVariants;
  homeTableTabType = HomeTableTabType;
  textSize = TextSize;
  textWeight = TextWeight;

  currentTab = this.homeTableTabType.NEW_SUGGESTIONS;

  tabs = [
    { text: this.homeTableTabType.NEW_SUGGESTIONS, status: true },
    { text: this.homeTableTabType.OLD_SUGGESTIONS, status: false },
  ];
  readonly TabToJSONKeyMap: { [key in HomeTableTabType]: string } = {
    [HomeTableTabType.NEW_SUGGESTIONS]: 'newSuggestion',
    [HomeTableTabType.OLD_SUGGESTIONS]: 'oldSuggestion',
  };
  clusterService = inject(ClusterService);

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
    return this.homeTableData?.[jsonKey] || [];
  }

  setActiveTab(tabText: HomeTableTabType) {
    this.tabs = this.tabs.map((tab) => ({
      ...tab,
      status: tab.text === tabText ? true : false

    }));
    this.currentTab = tabText;
    this.loadDataForTab(); // טען מחדש את הנתונים לטאב הנוכחי
  }

  headers: { data: string; type: HeaderCellType }[] = [];
  rows: {
    property: any;
    showAction: boolean;
    cells: {
      data: string;
      type: DataCellType;
      moreData?: { [key: string]: any };
    }[];

  }[] = [];
  readonly TabHeaders: { [key in HomeTableTabType]: { data: string, type: HeaderCellType }[] } = {
    [HomeTableTabType.NEW_SUGGESTIONS]: [
      { data: 'Name List', type: HeaderCellType.TEXT },
      { data: 'To Do', type: HeaderCellType.TEXT },
      { data: '', type: HeaderCellType.PLACEOLDER },
    ],
    [HomeTableTabType.OLD_SUGGESTIONS]: [
      { data: 'Name List', type: HeaderCellType.TEXT },
      { data: 'Done', type: HeaderCellType.TEXT },
      { data: 'To Do', type: HeaderCellType.TEXT },
    ],
  };

  loadDataForTab() {
    const jsonKey = this.TabToJSONKeyMap[this.currentTab]; // מיפוי הטאב למפתח המתאים
    const homeTableData = this.homeTableData?.[jsonKey] || []; // קבלת הנתונים עבור הטאב הנוכחי
    this.headers = this.TabHeaders[this.currentTab];

    this.rows = homeTableData.map((item: any) => ({
      property: item,
      showAction: true,
      cells: this.headers.map(header => {
        const jsonKey = header.data;
        const cellData = item[jsonKey] || '';
        const dataCellType = this.getDataCellTypeForHeader(header.data, header.type);


        return { data: cellData, type: dataCellType, moreData: {} };
      }),
    }));
  }

  async ngOnInit() {
    await this.clusterService.getAutoClusterData();
    this.clusterService.autoClusterListSubject$.subscribe((data) => {
      this.homeTableData = data; // שמירת הנתונים ב-tabData
      this.loadDataForTab(); // טען את הנתונים לטבלה
    });
  }
}



