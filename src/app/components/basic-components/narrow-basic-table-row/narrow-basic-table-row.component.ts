import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CheckStateType, DataCellType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CheckComponent } from '../check/check.component';
@Component({
  selector: 'yv-cluster-narrow-basic-table-row',
  standalone: true,
  imports: [CommonModule, DataCellsComponent, ReactiveFormsModule],
  templateUrl: './narrow-basic-table-row.component.html',
  styleUrl: './narrow-basic-table-row.component.scss',
})
export class NarrowBasicTableRowComponent {
  @Input() property: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;
  @Input() cells: {
    data: string;
    type: DataCellType;
    moreData?: { [key: string]: any };
  }[] = [];
  @Input() controls!: FormControl[];

  dataCellType = DataCellType;
  checkStateType = CheckStateType;

  controlsMap: { [key: string]: FormControl } = {}; // Map to store precomputed controls

  ngOnChanges() {
    if (this.controls && this.controls.length >= 3) {
      this.initializeControlsMap();
    } else {
      console.error('Controls array is not properly defined or has insufficient length.', this.controls);
      this.controls = [
        new FormControl(false), // Default for CHECK
        new FormControl(''),    // Default for ASSIGNEE
        new FormControl(''),    // Default for STATUS
      ];
      this.initializeControlsMap();
    }
  }
  // Precompute the controls map
  initializeControlsMap() {
    this.controlsMap = {
      [DataCellType.CHECK]: this.controls[0], // checkedControl
      [DataCellType.ASSIGNEE]: this.controls[1], // assigneeControl
      [DataCellType.STATUS]: this.controls[2], // statusControl
    };
  }
}