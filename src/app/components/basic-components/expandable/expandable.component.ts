
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
  @Input() formgroup: FormGroup;
  @Input() length : NarrowBasicTableRowLength;
  #clusterService=inject(ClusterService)
  currentUserRole = this.#clusterService.currentUser.role;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  showExpand:boolean = false;
  openExpand(){
    this.showExpand = !this.showExpand;
    this.property = NarrowBasicTableRowExpandState.OPEN
   console.log(this.formgroup);
   
  }
  get controls(): { [key: string]: FormControl } {
    return this.formgroup.controls as { [key: string]: FormControl };
  }
  getFormControls(formgroup: FormGroup): { key: string; value: AbstractControl }[] {
    return Object.entries(formgroup.controls).map(([key, value]) => ({ key, value }));
  }
}
