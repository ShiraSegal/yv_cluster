import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() prefCodeStatus: boolean=false;
  @Output() bookIdToDelet= new EventEmitter<string>();


  dataCellType = DataCellType;
  checkStateType = CheckStateType;

  controlsMap: { [key: string]: FormControl } = {}; // Map to store precomputed controls
ngOnInit() {
  console.log("Narrow Basic Table Row Component controls", this.controls);
  
}
  ngOnChanges() {
    if (this.controls && this.controls?.length >= 3) {
      this.initializeControlsMap3();
    } 
    else if (this.controls && this.controls?.length >=1) {
      this.initializeControlsMap1();
    } 
    else {
      // console.error('Controls array is not properly defined or has insufficient length.', this.controls);
      this.controls = [
        new FormControl(false), // Default for CHECK
        new FormControl(''),    // Default for ASSIGNEE
        new FormControl(''),    // Default for STATUS
      ];
      this.initializeControlsMap3();
    }
  }
  // Precompute the controls map
  initializeControlsMap3() {
    this.controlsMap = {
      [DataCellType.CHECK]: this.controls[0], // checkedControl
      [DataCellType.ASSIGNEE]: this.controls[1], // assigneeControl
      [DataCellType.STATUS]: this.controls[2], // statusControl
    };
  }

    initializeControlsMap1() {
    this.controlsMap = {
      [DataCellType.CHECK]: this.controls[0], // checkedControl
    };
  }
    onIconDeletClick() {
    this.bookIdToDelet.emit(typeof this.cells[1].data === 'string'?this.cells[1].data :" ");    
}
}