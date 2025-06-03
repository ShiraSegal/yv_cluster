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

  setActiveTab(tabText: HomeTableTabType) {
    this.tabs = this.tabs.map((tab) => ({
      ...tab,
      status: tab.text === tabText ? true : false
    }));
    this.currentTab = tabText;
  }


}
