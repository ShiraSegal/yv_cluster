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
  #fb = inject(FormBuilder)

  //initializing the form
  tableDataForm: FormGroup = this.#fb.group({
    rowsFormArray: this.#fb.array([])
  });

  ngOnInit() {
    this.initializeRowsFormArray();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['Rows'] && this.Rows?.length) {
     // console.log('Rows (ngOnChanges):', this.Rows);
      this.initializeRowsFormArray();
    }
  }

  // Initialize the FormArray with the rows data
  initializeRowsFormArray() {
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
  onClickAddCluster(){
    //open dialog create new cluster
  }
  onClicShowkAssineeOrStatus(){

  }
  onFilterValuesChange(values: any[]){
  // console.log('filter values:', values);
   //create filter arr
   // filter this.Rows based on the values

  }

}
