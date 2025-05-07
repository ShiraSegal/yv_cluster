import { CommonModule } from '@angular/common';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import {  ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { FilterSectionComponent } from "../filter-section/filter-section.component";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  //injects

  #fb = inject(FormBuilder)

  //initializing the form
  tableDataForm: FormGroup = this.#fb.group({
    rowsFormArray: this.#fb.array([])
  });

  ngOnInit() {
    debugger
    this.tableDataForm.valueChanges.subscribe((value) => {
      console.log('Basic table Form Value:', value);
    }
    );
    this.rowsFormArray.valueChanges.subscribe((value) =>{
       console.log('table Rows value changes:', value)
    }
  );
  }
  // Initialize the FormArray with the rows data
  initializeRowsFormArray() {
    this.rowsFormArray.clear(); 
    this.Rows?.forEach((row,index) => {
      const rowGroup = this.#fb.group({
        // id: [row.cells[index].data],
        status : new FormControl(row.cells.find(cell => cell.type === DataCellType.STATUS)?.data || ''),
        assignee : new FormControl(row.cells.find(cell => cell.type === DataCellType.ASSIGNEE)?.data || ''),
        checked : new FormControl(row.cells.find(cell => cell.type === DataCellType.CHECK)?.data || false),
      });
      this.rowsFormArray.push(rowGroup);
      console.log('Rows:', this.Rows);
      console.log('FormArray Controls:', this.rowsFormArray.controls);
    });
  }
  get rowsFormArray(): FormArray {
    return this.tableDataForm.get('rowsFormArray') as FormArray;
  }
  get rowGroup(): FormGroup[] {
    return this.rowsFormArray.controls as FormGroup[];
  }
  getFormControl(control: AbstractControl | null): FormControl {
    return control as FormControl;
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


}