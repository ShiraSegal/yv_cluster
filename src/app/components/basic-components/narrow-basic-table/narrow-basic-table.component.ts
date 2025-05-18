import { CommonModule } from '@angular/common';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState, State } from 'src/app/enums/basic-enum';
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

@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NarrowBasicTableRowComponent, TableHeaderComponent, FilterSectionComponent,PopoverComponent],
  templateUrl: './narrow-basic-table.component.html',
  styleUrl: './narrow-basic-table.component.scss'
})
export class NarrowBasicTableComponent {

  @Input() Filters : FilterNames[] = [];
  @Input() Headers: { data: string; type: HeaderCellType }[] = [];
  @Input() Rows: {
    property: NarrowBasicTableRowInputState;
    showAction: boolean;
    cells: {
      data: string;
      type: DataCellType;
      moreData?: { [key: string]: any };
    }[];
  }[] = [];

  label: string = 'Select Label';
  primary = ButtonType.PRIMARY
  variant3 = ButtonIconProperty.VARIANT3
  iconType = IconType
  stateEnum = State
  nativeOptions = NativeOptionType;
  rowProperty: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;

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


  get rowsFormArray(): FormArray {
    return this.tableDataForm.get('rowsFormArray') as FormArray;
  }
    get headerCheckboxControl(): FormControl {
    return this.tableDataForm.get('headerCheckbox') as FormControl;
  }

  ngOnInit() {
    console.log( "ngoninit rows:",this.Rows);
    console.log( "ngoninit filters:",this.Filters);
    this.initializeRowsFormArray();
    this.initializeRowControlsArray();

    // this.subscription.add(this.#managementService.stepTwoMarkErrors$.subscribe(
    //   (val) => {
    //     this.showError=val;
    //   }
    // ))

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
  initializeRowsFormArray() {    
    console.log('initializeRowsFormArray called');
    this.rowsFormArray.clear();
    this.Rows?.forEach((row, index) => {
      const rowGroup = this.#fb.group({
        checked: new FormControl(row.cells.find(cell => cell.type === DataCellType.CHECK)?.data || false),
        assignee: new FormControl(row.cells.find(cell => cell.type === DataCellType.ASSIGNEE)?.data || ''),
        status: new FormControl(row.cells.find(cell => cell.type === DataCellType.STATUS)?.data || ''),
      });
      
      this.rowsFormArray.push(rowGroup);
    });
    console.log('All Rows FormArray:', this.rowsFormArray.getRawValue()); // לוג של כל ה-FormArray
  }
  updateIconsVisibility() {
    console.log('updateIconsVisibility called');
    this.iconsVisible = this.rowsFormArray.controls.some((group) => {
      return group.get('checked')?.value;
    });
    console.log('Icons visibility:', this.iconsVisible);
    console.log(this.rowsFormArray);
    
  }
  
  get rowGroup(): FormGroup[] {
    return this.rowsFormArray.controls as FormGroup[]; 
  }
 
  rowControlsArray: FormControl[][] = []
  
  initializeRowControlsArray() {
    console.log('initializeRowControlsArray called');
    const rowsFormArray = this.tableDataForm.get('rowsFormArray') as FormArray;
    this.rowControlsArray = rowsFormArray.controls.map((rowFormGroup,index) => {
      const group = rowFormGroup as FormGroup;
      // console.log(`Row ${index} FormGroup Value:`, group.getRawValue());      
      return [
        group.get('checked') as FormControl,
        group.get('assignee') as FormControl,
        group.get('status') as FormControl,
      ];
    });
    console.log('All Row Controls:', this.rowControlsArray); // לוג של כל המערך של ה-Controls
  }
  getRowControls(rowIndex: number): FormControl[] {
    const rowFormGroup = (this.tableDataForm.get('rowsFormArray') as FormArray).at(rowIndex) as FormGroup;
    
    return [
      rowFormGroup.get('checked') as FormControl,
      rowFormGroup.get('assignee') as FormControl,
      rowFormGroup.get('status') as FormControl,
    ];
  }
  onHeaderCheckboxToggle(): void {
    debugger
    const isChecked = this.tableDataForm.get('headerCheckbox')?.value;
  
    // Update all row checkboxes
    this.rowsFormArray.controls.forEach((group) => {
      const checkedControl = group.get('checked');
      if (checkedControl) {
        checkedControl.setValue(isChecked, { emitEvent: true });
      }
    });
    console.log('Updated rowsFormArray values:', this.rowsFormArray.value);
  }

  showPopover(type: string, index: number): void {
    this.hoveredPopover = { type, index };
  }

  hidePopover(): void {
    this.hoveredPopover = null;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['Rows'] && this.Rows) {
      console.log('Rows (ngOnChanges):', this.Rows);
      if (changes['Rows'] && this.Rows?.length) {
        this.initializeRowsFormArray();
        this.initializeRowControlsArray(); 
           }
    }
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
    console.log('test on click');
  }
  onClickAddCluster(){
    //open dialog create new cluster
  }
   onClicShowkAssineeOrStatus(){
   }

  onFilterValuesChange(values: any[]){
   console.log('filter values:', values);
   //create filter arr 
   // filter this.Rows based on the values
  }

//   }

// }

}