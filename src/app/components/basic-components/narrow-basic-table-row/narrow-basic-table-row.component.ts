import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CheckStateType, DataCellType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CheckComponent } from '../check/check.component';
 
@Component({
  selector: 'yv-cluster-narrow-basic-table-row',
  standalone: true,
  imports: [CommonModule ,DataCellsComponent,ReactiveFormsModule],
  templateUrl: './narrow-basic-table-row.component.html',
  styleUrl: './narrow-basic-table-row.component.scss',
})
export class NarrowBasicTableRowComponent {
  @Input() property: NarrowBasicTableRowInputState  = NarrowBasicTableRowInputState.DEFAULT ;
  @Input() cells: {
    data: string; 
    type: DataCellType;
    moreData?: { [key: string]: any }; // Optional additional data
  }[] = [];
  @Input() rowFormArray: FormArray; // Pass the FormArray
  @Input() rowIndex: number; // Pass the index of the row

  get rowFormGroup(): FormGroup {
    return this.rowFormArray.at(this.rowIndex) as FormGroup; // Retrieve the specific FormGroup
  }
  dataCellType = DataCellType;
  checkStateType = CheckStateType

 

}

