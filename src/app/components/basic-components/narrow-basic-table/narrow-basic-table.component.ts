import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowExpandState, NarrowBasicTableRowInputState, NarrowBasicTableRowLength, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { FilterSectionComponent } from "../filter-section/filter-section.component";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormControlState, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';
import { Subscription } from 'rxjs';
import { PopoverComponent } from '../popover/popover.component';
import { FilterNames } from 'src/app/enums/auto-cluster-table-enum';
import { ExpandableComponent } from '../expandable/expandable.component';
import { log } from 'console';


@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    NarrowBasicTableRowComponent,
    TableHeaderComponent,
    FilterSectionComponent,
    ExpandableComponent
  ],
  templateUrl: './narrow-basic-table.component.html',
  styleUrl: './narrow-basic-table.component.scss',
})
export class NarrowBasicTableComponent {
  @Input() currentTab: AutoClusterTabType;
  @Input() Filters: FilterNames[] = [];
  @Input() Headers: { data: string }[];
  @Input() Rows: any[][];

  HeadersForTab: { data: string }[];
  RowsForTab: any[][];

  initialStateString: FormControlState<string> = {
    value: '',
    disabled: true
  };
  initialStateBoolean: FormControlState<boolean> = {
    value: false,
    disabled: false
  };
  narrowBasicTableRowLength = NarrowBasicTableRowLength;
  narrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  label: string = 'Select Label';
  primary = ButtonType.PRIMARY
  variant3 = ButtonIconProperty.VARIANT3
  iconType = IconType
  stateEnum = State
  nativeOptions = NativeOptionType
  autoClusterTabType = AutoClusterTabType
  NarrowBasicTableRowExpandState = NarrowBasicTableRowExpandState
  hoveredPopover: { type: string; index: number } | null = null;

  //injects

  #fb = inject(FormBuilder)

  subscription: Subscription = new Subscription();

  //initializing the form
  tableDataForm: FormGroup = this.#fb.group({
    headerCheckbox: new FormControl(false),
    rowsFormArray: this.#fb.array([])
  });

  iconsVisible: boolean = false;

  ngOnInit() {
    this.HeadersForTab = this.Headers;
    this.RowsForTab = this.Rows;
    this.initializeRowsFormArray();
    //console.log(this.rowsFormArray);

    // // מנוי על שינויים בפורם הראשי
    // this.tableDataForm.valueChanges.subscribe((value) => {
    //   //console.log('Basic table Form Value:', value);
    // });

    // // מנוי על שינויים ב-rowsFormArray
    // this.rowsFormArray.valueChanges.subscribe((value) => {
      
    //  // console.log('table Rows value changes:', value);
    // });

    // // מנוי על שינויים ב-headerCheckboxControl
    // this.headerCheckboxControl.valueChanges.subscribe((isChecked) => {
    //   //console.log('Header Checkbox changed:', isChecked);
    //   this.onHeaderCheckboxToggle();
    // });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }

  updateIconsVisibility() {
    // console.log('updateIconsVisibility called');
    //לשאול את יהודית
    this.iconsVisible = this.rowsFormArray.controls.some((group) => {
      return group.get('checked')?.value;
    });
    // console.log('Icons visibility:', this.iconsVisible);
    // console.log(this.rowsFormArray);
  }
  onHeaderCheckboxToggle(): void {
    const isChecked = this.tableDataForm.get('headerCheckbox')?.value;

    // Update all row checkboxes
    this.rowsFormArray.controls.forEach((group) => {
      const checkedControl = group.get('checked');
      if (checkedControl) {
        checkedControl.setValue(isChecked, { emitEvent: true });
      }
    });
    // console.log('Updated rowsFormArray values:', this.rowsFormArray.value);
  }

  showPopover(type: string, index: number): void {
    this.hoveredPopover = { type, index };
  }

  hidePopover(): void {
    this.hoveredPopover = null;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['Headers']) {
      this.HeadersForTab = changes['Headers'].currentValue;
    }
    if (changes['Rows']) {
      this.RowsForTab = changes['Rows'].currentValue;
      this.initializeRowsFormArray()
      console.log(this.rowsFormArray);
    }
  }

  initializeRowsFormArray() {
    this.rowsFormArray.clear();
    this.RowsForTab.forEach((row) => {
      const rowGroup = this.#fb.group({});

      row.forEach((cellData, index) => {
        const header = this.HeadersForTab[index].data;
        let control = new FormControl({ value: cellData || '', disabled: true }); // disabled מראש

        switch (header) {
          case "check":
            const controlBoolean = new FormControl(this.initialStateBoolean);
            rowGroup.addControl(header, controlBoolean);
            break;
          case "assignee":
          case "status":
            control.enable(); // אפשר עריכה עבור assignee ו-status
            rowGroup.addControl(header, control);
            break;
          default:
            rowGroup.addControl(header, control);
        }
      });

      this.rowsFormArray.push(rowGroup);
    });
    this.updateIconsVisibility();
  }


  get rowsFormArray(): FormArray<FormGroup> {
    return this.tableDataForm.get('rowsFormArray') as FormArray<FormGroup>;
  }
  get headerCheckboxControl(): FormControl {
    return this.tableDataForm.get('headerCheckbox') as FormControl;
  }


  nativeOptionswe = [
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
  ];

  trackByFn(index: number, item: any): any {
    return index;
  }
  onClick() {
    alert('test on click');
    // console.log('test on click');
  }
  onClickAddCluster() {
    //open dialog create new cluster
  }
  onClicShowkAssineeOrStatus() {
  }

  onFilterValuesChange(values: any[]) {
    // console.log('filter values:', values);
    //create filter arr
    // filter this.Rows based on the values
  }

}
