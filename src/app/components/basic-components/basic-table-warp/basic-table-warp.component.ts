import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasicTablePropertyType, BasicTableRowPropertyVariants, HeaderCellType, HomeTableTabType, StatusActiveOrNotActive } from 'src/app/enums/basic-enum';
import { DataCellType } from 'src/app/enums/basic-enum';
import { BasicTableComponent } from '../basic-table/basic-table.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'yv-cluster-basic-table-warp',
  standalone: true,
  imports: [BasicTableComponent ,CommonModule ],
  templateUrl: './basic-table-warp.component.html',
  styleUrl: './basic-table-warp.component.css'
})
export class BasicTableWarpComponent {

      @Input() title: string  = '';
      @Input() showSelect: boolean = false;
      @Input() data: { property : BasicTablePropertyType ; Headers: { data: string; type: HeaderCellType }[] ; Rows: { property: BasicTableRowPropertyVariants; showAction: boolean; cells:{ data: string; type: DataCellType ; moreData?: { [key: string]: any }}[] }[]} = { property: BasicTablePropertyType.NEWֹֹֹֹֹֹ_SUGGESTIONS, Headers: [], Rows: [] };
    //   homeTableData: {
    //     newSuggestion: any[];
    //     oldSuggestion: any[];
    //   } | undefined;
    homeTableData:any;
      dataCellType = DataCellType;
      headerCellType = HeaderCellType;
      basicTablePropertyType = BasicTablePropertyType;
      basicTableRowPropertyVariants=BasicTableRowPropertyVariants;
      homeTableTabType = HomeTableTabType;
      statusActiveOrNotActive=StatusActiveOrNotActive;
      
      currentHeaders: { data: string; type: HeaderCellType }[] = [];
      currentRows: { property: BasicTableRowPropertyVariants; showAction: boolean; cells:{ data: string; type: DataCellType ; moreData?: { [key: string]: any }}[] }[] = [];
     currentTab = this.homeTableTabType.NEWֹֹֹֹֹֹ_SUGGESTIONS;

     tabs = [
       { text:this.homeTableTabType.NEWֹֹֹֹֹֹ_SUGGESTIONS, status: StatusActiveOrNotActive.ACTIVE },
       { text:this.homeTableTabType.OLD_SUGGESTIONS, status: StatusActiveOrNotActive.NOT_ACTIVE },
     ];
     readonly TabToJSONKeyMap: { [key in HomeTableTabType]: string } = {
        [HomeTableTabType.NEWֹֹֹֹֹֹ_SUGGESTIONS]: 'newSuggestion',
        [HomeTableTabType.OLD_SUGGESTIONS]: 'oldSuggestion',
      };

      getDataForCurrentTab(): any[] {
        const jsonKey = this.TabToJSONKeyMap[this.currentTab];
        return this.homeTableData?.[jsonKey] || [];
      }
     setActiveTab(tabText: HomeTableTabType) {
       this.tabs = this.tabs.map((tab, index) => ({
         ...tab,
         status: tab.text === tabText ? StatusActiveOrNotActive.ACTIVE : StatusActiveOrNotActive.NOT_ACTIVE
   
       }));
       this.currentTab = tabText;
      //  this.loadDataForTab();
     }
     readonly DBKeyToHeaderMap: { [key: string]: string } = {
        nameList: 'Name List',
        toDo: 'To Do',
        done: 'Done',
        assignee: 'Assignee',
        dateOfReport: 'Date of report',
        assigneeData: 'Assignee data',
      };

    //  readonly TabHeaders: { [key in HomeTableTabType]: { data: string, type: HeaderCellType }[] } = {
    //    [HomeTableTabType.NEWֹֹֹֹֹֹ_SUGGESTIONS]: [
    //      { data: '', type: HeaderCellType.CHECK },
    //      { data: this.DBKeyToHeaderMap['clusterID'], type: HeaderCellType.TEXT },
    //      { data: this.DBKeyToHeaderMap['comment'], type: HeaderCellType.TEXT },
    //      { data: this.DBKeyToHeaderMap['dateOfReport'], type: HeaderCellType.TEXT }
    //    ],
    //    [AutoClusterTabType.MISSING_FIELD]: [
    //      { data: '', type: HeaderCellType.CHECK },
    //      { data: 'CNT', type: HeaderCellType.TEXT },
    //      { data: this.DBKeyToHeaderMap['clusterID'], type: HeaderCellType.TEXT },
    //      { data: this.DBKeyToHeaderMap['missingField'], type: HeaderCellType.TEXT },
    //      { data: 'Comments', type: HeaderCellType.TEXT },
    //      { data: 'Status', type: HeaderCellType.TEXT },
    //      { data: 'Assignee', type: HeaderCellType.TEXT },
    //      { data: 'Date of report', type: HeaderCellType.TEXT },
    //      { data: 'Assignee data', type: HeaderCellType.TEXT }
   
    //    ],      
    //  };
    //  loadDataForTab() {
    //  const tabData = this.getDataForCurrentTab(); 
   
    //  this.Headers = this.TabHeaders[this.currentTab];
    //  const headerToKeyMap = Object.entries(this.DBKeyToHeaderMap).reduce((acc, [key, value]) => {
    //    acc[value] = key;
    //    return acc;
    //  }, {} as { [key: string]: string });
     
    //  this.Rows = tabData.map((item: any) => ({
    //    property: item,
    //    showAction: true,
    //    cells: this.Headers.map(header => {
    //      const jsonKey = headerToKeyMap[header.data] || header.data; // Map header name to JSON key
    //      return {
    //        data: item[jsonKey] || '', // Use the mapped JSON key to fetch data
    //        type: DataCellType.TEXT
    //      };
    //    })
    //  }));
    //  }
    //  ngOnInit() {
    //    this.loadDataForTab();
    //  }
   
    }
    
