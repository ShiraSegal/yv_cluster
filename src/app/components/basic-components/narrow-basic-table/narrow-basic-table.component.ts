import { CommonModule } from '@angular/common';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { FilterSectionComponent } from "../filter-section/filter-section.component";
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NarrowBasicTableRowComponent, TableHeaderComponent, FilterSectionComponent],
  templateUrl: './narrow-basic-table.component.html',
  styleUrl: './narrow-basic-table.component.scss'
})
export class NarrowBasicTableComponent {

  @Input() Headers: { data: string; type: HeaderCellType }[] = [];
  @Input() Rows: {
    property: NarrowBasicTableRowInputState;
    showAction: boolean;
    length:NarrowBasicTableRowLength
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
  nativeOptions = NativeOptionType;
  rowProperty: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;

  //injects
  private clusterService = inject(ClusterService); // הזרקת ClusterService
  #fb = inject(FormBuilder)

  //initializing the form
  tableDataForm: FormGroup = this.#fb.group({
    rowsFormArray: this.#fb.array([])
  });

  ngOnInit() {
    this.initializeRowsFormArray();
    this.initializeRowControlsArray();
  }
  // Initialize the FormArray with the rows data
  initializeRowsFormArray() {
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
 
  rowControlsArray: FormControl[][] = []
  
  initializeRowControlsArray() {
    const rowsFormArray = this.tableDataForm.get('rowsFormArray') as FormArray;
    this.rowControlsArray = rowsFormArray.controls.map((rowFormGroup) => {
      const group = rowFormGroup as FormGroup;
      console.log('Row FormGroup Value:', group.getRawValue()); // לוג של הערכים של כל Row
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
  get rowsFormArray(): FormArray {
    return this.tableDataForm.get('rowsFormArray') as FormArray;
}
  get rowGroup(): FormGroup[] {
    return this.rowsFormArray.controls as FormGroup[]; // Explicitly cast to FormGroup[]
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['Rows'] && this.Rows) {
      console.log('Rows (ngOnChanges):', this.Rows);
      if (changes['Rows'] && this.Rows?.length) {
        this.initializeRowsFormArray();
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

}