import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AutoClusterTabType, ButtonType, CheckStateType, DataCellType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';
import { IconType } from 'src/app/enums/icon-enum';
@Component({
  selector: 'yv-cluster-narrow-basic-table-row',
  standalone: true,
  imports: [CommonModule, DataCellsComponent, ReactiveFormsModule],
  templateUrl: './narrow-basic-table-row.component.html',
  styleUrl: './narrow-basic-table-row.component.scss',
})
export class NarrowBasicTableRowComponent {
  @Input() property: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;
  @Input() length : NarrowBasicTableRowLength;
  @Input() currentTab : AutoClusterTabType;
  @Input() rowGroup: FormGroup;
  @Input() prefCodeStatus: boolean=false;
  @Output() bookIdToDelet= new EventEmitter<string>();

  #clusterService=inject(ClusterService)
  currentUserRole = this.#clusterService.currentUser.role;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
autoClusterTabType=AutoClusterTabType
  iconType = IconType;
  buttonType = ButtonType;
rowGroupControls: { name: string; control: FormControl }[] = [];

ngOnInit() {
  this.initializeRowGroupControls()
  this.rowGroup.valueChanges.subscribe((value) => {
    console.log('Form value changed:', value);
    this.initializeRowGroupControls()
  })
}

initializeRowGroupControls(){
  this.rowGroupControls = Object.entries(this.rowGroup.controls).map(([name, control]) => {
    return { name, control: control as FormControl }; // שמירת השם והקונטרול
});
}

  onIconDeletClick() {
    const cellControl = this.rowGroup.get('cellKey'); // 'cellKey' הוא המפתח של התא הרצוי
    const cellData = cellControl?.value?.data;

    if (typeof cellData === 'string') {
      this.bookIdToDelet.emit(cellData);
    } else {
      this.bookIdToDelet.emit('');
    }
  }



}
