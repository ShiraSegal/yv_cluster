import { CommonModule } from '@angular/common';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IconType } from 'src/app/enums/icon-enum';
import { FilterSectionComponent } from "../filter-section/filter-section.component";

@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule, NarrowBasicTableRowComponent, TableHeaderComponent, FilterSectionComponent],
  templateUrl: './narrow-basic-table.component.html',
  styleUrl: './narrow-basic-table.component.scss'
})
export class NarrowBasicTableComponent {


  @Input() Headers: { data: string; type: HeaderCellType }[] = [];
  @Input() Rows: {
    property: NarrowBasicTableRowInputState;
    showAction: boolean;
    cells: {
      data: string;
      type: DataCellType;
      moreData?: { [key: string]: any };
    }[];
  }[] | undefined = [];

  label: string = 'Select Label';
  primary = ButtonType.PRIMARY
  variant3 = ButtonIconProperty.VARIANT3
  iconType = IconType
  stateEnum = State
  nativeOptions = NativeOptionType;
  rowProperty: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;

  nativeOptionswe = [
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
  ];
  #fb = inject(FormBuilder)

  tableDataForm: FormGroup = this.#fb.group({
    rowsFormArray: this.#fb.array([])
  });

  ngOnInit() {
    debugger
    // console.log('Rows on Init:', this.Rows);
    // this.Rows?.forEach((row, index) => {
    //   const control = this.#fb.group({
    //     checked: [false],
    //     id: [row.cells[index].data]
    //   });
    //   this.rows.push(control);
    // });
  }

  initializeRowsFormArray() {
    this.rowsFormArray.clear(); // Clear the FormArray before adding new rows
    this.Rows?.forEach((row, index) => {
      const rowGroup = this.#fb.group({
        // id: [row.cells[index].data],
        status: this.#fb.control(row.cells.find(cell => cell.type === DataCellType.STATUS)?.data || ''),
        assignee: this.#fb.control(row.cells.find(cell => cell.type === DataCellType.ASSIGNEE)?.data || ''),
        checked: this.#fb.control(row.cells.find(cell => cell.type === DataCellType.CHECK)?.data || false)
      });
      this.rowsFormArray.push(rowGroup);
    });
  }
  get rowsFormArray(): FormArray {
    return this.tableDataForm.get('rowsFormArray') as FormArray;
  }
  get rowGroup(): FormGroup[] {
    return this.rowsFormArray.controls as FormGroup[];
  }
  // constructor(private fb: FormBuilder) {
  //   this.rowsFormArray = this.fb.array([]); // Initialize the FormArray
  //   this.form = this.fb.group({
  //     rows: this.rowsFormArray // Add the FormArray to the FormGroup
  //   });
  // }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['Rows'] && this.Rows) {
      console.log('Rows (ngOnChanges):', this.Rows);
      this.initializeRowsFormArray(); // Initialize the FormArray when Rows changes
    }
  }
  trackByFn(index: number, item: any): any {
    return index;
  }
  onClick() {
    alert('test on click');
    console.log('test on click');
  }
}
