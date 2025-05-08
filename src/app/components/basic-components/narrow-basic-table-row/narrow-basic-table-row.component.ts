import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CheckStateType, DataCellType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
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
  
  @Input() rowFormGroup: FormGroup; // Pass the FormGroup for the row
  DataCellType = DataCellType;
  CheckStateType = CheckStateType

  getControl(cellType: DataCellType): FormControl {
  return this.rowFormGroup.get(this.getFormControlName(cellType)) as FormControl;
}
  getFormControlName(cellType: DataCellType): string {
    switch (cellType) {
      case DataCellType.CHECK:
        return 'checked';
      case DataCellType.ASSIGNEE:
        return 'assignee';
      case DataCellType.STATUS:
        return 'status';
      default:
        return ''; // Return an empty string for unsupported types
    }
  }

}

