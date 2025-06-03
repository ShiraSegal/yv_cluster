import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AutoClusterTabType, CheckStateType, DataCellType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';
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
  @Input()  currentTab : AutoClusterTabType;
  @Input() formgroup: FormGroup;
  @Input() prefCodeStatus: boolean=false;
  @Output() bookIdToDelet= new EventEmitter<string>();

  #clusterService=inject(ClusterService)
  currentUserRole = this.#clusterService.currentUser.role;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
autoClusterTabType=AutoClusterTabType
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.formgroup.valueChanges.subscribe((value) => {
  console.log('Form value changed:', value);
  
})
}
  onIconDeletClick() {
    const cellControl = this.formgroup.get('cellKey'); // 'cellKey' הוא המפתח של התא הרצוי
    const cellData = cellControl?.value?.data;

    if (typeof cellData === 'string') {
      this.bookIdToDelet.emit(cellData);
    } else {
      this.bookIdToDelet.emit('');
    }
  }

  get controls(): { [key: string]: FormControl } {
    return this.formgroup.controls as { [key: string]: FormControl };
  }
  getFormControls(formgroup: FormGroup): { key: string; value: AbstractControl }[] {
    return Object.entries(formgroup.controls).map(([key, value]) => ({ key, value }));
  }
}
