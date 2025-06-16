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
import { FormArray, FormBuilder, FormControl, FormControlState, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterSectionComponent } from '../filter-section/filter-section.component';
import { ChangeDetectorRef } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'yv-cluster-narrow-basic-table-warp',
  standalone: true,
  imports: [CommonModule,
     BasicTabComponent,
      NarrowBasicTableComponent,
      FilterSectionComponent,
      ReactiveFormsModule
    ],
  templateUrl: './narrow-basic-table-warp.component.html',
  styleUrl: './narrow-basic-table-warp.component.scss',
})
export class NarrowBasicTableWarpComponent {
  @Input() subTitle: string = '';
  clusterService = inject(ClusterService);
  #fb = inject(FormBuilder);
  cdr = inject(ChangeDetectorRef);
  //enum imports
  autoClusterTabType = AutoClusterTabType;
  headerCellType = HeaderCellType;
  dataCellType = DataCellType;
  basicTablePropertyType = BasicTablePropertyType;
  narrowBasicTableRowLength = NarrowBasicTableRowLength;
  narrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  checkStateType = CheckStateType;
  checkType = CheckType;
  buttonType = ButtonType;
  iconType = IconType;
  //data
  tabData: any;
  currentTab = AutoClusterTabType.SAPIR_CLUSTERS;
  Headers: { [key in AutoClusterTabType]?: { data: string }[] } = {};
  Rows: { [key in AutoClusterTabType]?: any[][] } = {};

  initialStateString: FormControlState<string> = {
    value: '',
    disabled: true
  };
  initialStateBoolean: FormControlState<boolean> = {
    value: false,
    disabled: false
  };
  hoveredPopover: { type: string; index: number } | null = null;
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

  tableDataForm: FormGroup = this.#fb.group({
   headerCheckbox: new FormControl(false),
    rowsFormArray: this.#fb.array([])
  });

  iconsVisible: boolean = false;

  ngOnInit() {
    this.clusterService.getAutoClusterData();
    this.subscription.add(this.clusterService.getAutoClusterData().subscribe((data) => {
      this.tabData = data; // שמירת הנתונים ב-tabData
      this.loadDataForTab(); // טען את הנתונים לטבלה
    }));
    this.subscription.add(this.tableDataForm.valueChanges.subscribe((value) => {
      // Handle changes in the entire form
      // console.log('Basic table Form Value:', value);
    }));
    this.subscription.add(this.rowsFormArray.valueChanges.subscribe((rows) => {
      // Handle changes in the rows dynamically
      // console.log('Rows Form Array Value:', rows);
    }));
    this.subscription.add(this.headerCheckbox.valueChanges.subscribe((headerCheckBox) => {
      // Handle changes in the rows dynamically
      debugger;
      this.onHeaderCheckboxToggle()
    }));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  initializeRowsFormArray() {
    // ניקוי השורות הקיימות
    this.rowsFormArray.clear();

    this.Rows[this.currentTab]?.forEach((row) => {
      const rowGroup = this.#fb.group({});

      row.forEach((cellData, index) => {
        const header = this.Headers[this.currentTab][index]?.data;

        let control = new FormControl({ value: cellData || '', disabled: true });

        switch (header) {
          case "check":
            control = new FormControl(this.initialStateBoolean);
            break;
          case "assignee":
          case "status":
            control.enable();
            break;
        }

        rowGroup.addControl(header, control);
      });

      this.rowsFormArray.push(rowGroup); // הוספת FormGroup
    });
  }
  get rowsFormArray(): FormArray<FormGroup> {
    return this.tableDataForm.get('rowsFormArray') as FormArray<FormGroup> ;
  }
  get headerCheckbox(): FormControl {
    return this.tableDataForm.get('headerCheckbox') as FormControl;
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

    // טען את השורות לטופס
    this.initializeRowsFormArray();
  }
setActiveTab(tabText: AutoClusterTabType) {
  this.tabs = this.tabs.map((tab) => ({
    ...tab,
    status: tab.text === tabText ? true : false
  }));
  this.currentTab = tabText;
  this.initializeRowsFormArray()
  this.tableDataForm.patchValue({
    headerCheckbox: false // איפוס ה-checkbox של הכותרת
  });
  this.tableDataForm.patchValue({
    rowsFormArray: this.Rows[this.currentTab] || [] // איפוס השורות בטופס
  });
   //, { emitEvent: false }
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

  onFilterValuesChange(values: any[]) {
    console.log('Filter values:', values);
    this.filterRows(values); // Apply filtering logic
  }

  onClickAddCluster() {
    console.log('Add Cluster clicked');
    // Handle add cluster logic
  }

  onClicShowkAssineeOrStatus() {
    console.log('Show Assignee or Status clicked');
    // Handle assignee/status logic
  }

  filterRows(filterValues: any[]) {
    this.Rows[this.currentTab] = this.Rows[this.currentTab]?.filter((row) => {
      return filterValues.includes(row[0]); // Example filtering logic
    });
    this.initializeRowsFormArray(); // Reinitialize rows after filtering
  }
  showPopover(type: string, index: number): void {
    this.hoveredPopover = { type, index };
  }

  hidePopover(): void {
    this.hoveredPopover = null;
  }

  onHeaderCheckboxToggle(): void {
    const isChecked = this.headerCheckbox.value;
    debugger;
    // Update each control in rowsFormArray directly
    this.rowsFormArray.controls.forEach((group, index) => {
      const checkedControl = group.get('check');
      if (checkedControl&&checkedControl.value!==isChecked) {
        checkedControl.setValue(isChecked);
      }
    });

    console.log('Updated FormArray:', this.rowsFormArray.value);
    console.log('Updated tableDataForm:', this.tableDataForm.value);
    // Force Angular to detect changes
   // this.cdr.detectChanges();
  }
}



