import { Component, Input } from '@angular/core';
import { BasicTablePropertyType, BasicTableRowPropertyVariants, HeaderCellType, HomeTableTabType, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { DataCellType } from 'src/app/enums/basic-enum';
import { BasicTableComponent } from '../basic-table/basic-table.component';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../heading/heading.component';
import { BasicTabComponent } from '../basic-tab/basic-tab.component';

@Component({
  selector: 'yv-cluster-basic-table-warp',
  standalone: true,
  imports: [
    BasicTableComponent, CommonModule, HeadingComponent, BasicTabComponent
  ],
  templateUrl: './basic-table-warp.component.html',
  styleUrl: './basic-table-warp.component.scss'
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
    }[];
  }>> = {};

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
      { data: '', type: HeaderCellType.PLACEOLDER },
    ],
  };

  loadDataForTab() {
    const tabData = this.data?.[this.currentTab]; // קבלת הנתונים עבור הטאב הנוכחי
    console.log('Data for current tab:', tabData);

    this.headers = tabData?.Headers || [];
    console.log('Headers for current tab:', this.headers);

    this.rows = tabData?.Rows.map((item: any) => ({
      property: item.property,
      showAction: item.showAction,
      cells: this.headers.map(header => {
        const jsonKey = header.data;
        const cellData = item.cells.find((cell: any) => cell.data === jsonKey)?.data || '';
        const cellType = item.cells.find((cell: any) => cell.data === jsonKey)?.type || DataCellType.TEXT;
        return { data: cellData, type: cellType, moreData: {} };
      }),
    })) || [];

    console.log('Rows for current tab:', this.rows);
  }

  setActiveTab(tabText: HomeTableTabType) {
    console.log('Switching to tab:', tabText);

    this.tabs = this.tabs.map((tab) => ({
      ...tab,
      status: tab.text === tabText ? true : false
    }));

    this.currentTab = tabText;
    console.log('Updated current tab:', this.currentTab);

    this.loadDataForTab(); // טען מחדש את הנתונים לטאב הנוכחי
  }

  ngOnInit() {
    console.log('Initializing BasicTableWarpComponent...');
    this.loadDataForTab(); // טען את הנתונים לטאב הנוכחי
  }


}