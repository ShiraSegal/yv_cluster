import { CommonModule } from '@angular/common';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowExpandState, NarrowBasicTableRowInputState, NarrowBasicTableRowLength, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { FilterSectionComponent } from "../filter-section/filter-section.component";
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';
import { Subscription } from 'rxjs';
import { PopoverComponent } from '../popover/popover.component';
import { FilterNames } from 'src/app/enums/auto-cluster-table-enum';
import { ExpandableComponent } from '../expandable/expandable.component';


@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule, 
    ReactiveFormsModule, 
    NarrowBasicTableRowComponent, 
    TableHeaderComponent, 
    FilterSectionComponent, 
    ExpandableComponent],
  templateUrl: './narrow-basic-table.component.html',
  styleUrl: './narrow-basic-table.component.scss'
})
export class NarrowBasicTableComponent {
  @Input()  currentTab : AutoClusterTabType;
  @Input() Filters: FilterNames[] = [];
  @Input() Headers: { data: string; type: HeaderCellType }[] = [];
  @Input() Rows: {
    property: NarrowBasicTableRowInputState;
    showAction: boolean;
    length: NarrowBasicTableRowLength
    cells: {
      data: string;
      type: DataCellType;
      moreData?: { [key: string]: any };
    }[];
  }[] = [];

  narrowBasicTableRowLength = NarrowBasicTableRowLength;
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
  #clusterService = inject(ClusterService);
  #fb = inject(FormBuilder)

  subscription: Subscription = new Subscription();

  //initializing the form
  tableDataForm: FormGroup = this.#fb.group({
    headerCheckbox: new FormControl(false),
    rowsFormArray: this.#fb.array([])
  });

  iconsVisible: boolean = false;

  ngOnInit() {
    this.initializeRowsFormArray();

    this.tableDataForm.valueChanges.subscribe((value) => {
      // console.log('Basic table Form Value:', value);
    });
    this.rowsFormArray.valueChanges.subscribe((value) => {
      this.updateIconsVisibility();
      // console.log('table Rows value changes:', value)
    });
    this.headerCheckboxControl.valueChanges.subscribe((isChecked) => {
      this.onHeaderCheckboxToggle();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }

  updateIconsVisibility() {
   // console.log('updateIconsVisibility called');
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
    if (changes['Rows'] && this.Rows) {
    //  console.log('Rows (ngOnChanges):', this.Rows);
      if (changes['Rows'] && this.Rows?.length) {
        this.initializeRowsFormArray();

      }
    }
   // console.log('headers (ngOnChanges):', this.Headers);
  }

  // Initialize the FormArray with the rows data
  initializeRowsFormArray() {
    console.log(this.Headers);
    
    this.rowsFormArray.clear(); // איפוס ה-FormArray

    this.Rows.forEach((row) => {
      const rowGroup = this.#fb.group({}); // יצירת FormGroup עבור השורה

      row.cells.forEach((cell, index) => {
        const headerName = this.Headers[index]?.data || `header_${index}`; // שם ההידר או שם ברירת מחדל
        const control = new FormControl({
          data: cell.data,
          type: cell.type,
          moreData: cell.moreData,
        });
        rowGroup.addControl(headerName, control); // הוספת השדה ל-FormGroup עם שם ההידר
      });

      this.rowsFormArray.push(rowGroup); // הוספת ה-FormGroup ל-FormArray
    });

    // console.log('All Rows FormArray:', this.rowsFormArray.getRawValue()); // לוג של כל ה-FormArray
  }
  get rowsFormArray(): FormArray<FormGroup> {
    return this.tableDataForm.get('rowsFormArray') as FormArray<FormGroup>;
  }
  get rowGroup(): FormGroup[] {
    return this.rowsFormArray.controls as FormGroup[]; // Explicitly cast to FormGroup[]
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
