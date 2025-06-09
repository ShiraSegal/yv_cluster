
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CheckStateType, DataCellType, NarrowBasicTableRowExpandState, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';
@Component({
  selector: 'yv-cluster-expandable',
  standalone: true,
  imports: [CommonModule, DataCellsComponent, ReactiveFormsModule],
  templateUrl: './expandable.component.html',
  styleUrl: './expandable.component.scss'
})
export class ExpandableComponent {
 @Input() property: NarrowBasicTableRowExpandState = NarrowBasicTableRowExpandState.CLOSE
  @Input() rowGroup: FormGroup;
  @Input() length : NarrowBasicTableRowLength;
  #clusterService=inject(ClusterService)
  currentUserRole = this.#clusterService.currentUser.role;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  showExpand:boolean = false;
  openExpand(){
    this.showExpand = !this.showExpand;
    this.property = NarrowBasicTableRowExpandState.OPEN
   console.log(this.rowGroup);
   
  }
  get controls(): { [key: string]: FormControl } {
    return this.rowGroup.controls as { [key: string]: FormControl };
  }
  getFormControls(rowGroup: FormGroup): { key: string; value: AbstractControl }[] {
    return Object.entries(rowGroup.controls).map(([key, value]) => ({ key, value }));
  }
}
