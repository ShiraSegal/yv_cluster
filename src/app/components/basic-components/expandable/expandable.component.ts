
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AutoClusterTabType, CheckStateType, DataCellType, NarrowBasicTableRowExpandState, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'yv-cluster-expandable',
  standalone: true,
  imports: [CommonModule, DataCellsComponent, ReactiveFormsModule],
  templateUrl: './expandable.component.html',
  styleUrl: './expandable.component.scss'
})
export class ExpandableComponent {
 @Input() property: NarrowBasicTableRowExpandState = NarrowBasicTableRowExpandState.CLOSE
 @Input() currentTab : AutoClusterTabType;
  @Input() rowGroup: FormGroup;
  @Input() length : NarrowBasicTableRowLength;
  @Input() prefCodeStatus: boolean=false;
  @Output() bookIdToDelet= new EventEmitter<string>();
  #clusterService=inject(ClusterService)
  currentUserRole = this.#clusterService.currentUser.role;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  showExpand:boolean = false;
  rowGroupControls: { name: string; control: FormControl }[] = [];
subscription: Subscription = new Subscription();
ngOnInit() {
  this.initializeRowGroupControls()
  this.subscription.add(this.rowGroup.valueChanges.subscribe((value) => {
    // console.log('Form value changed:', value);
    this.initializeRowGroupControls()
  }))
}
initializeRowGroupControls(){
  this.rowGroupControls = Object.entries(this.rowGroup.controls).map(([name, control]) => {
    return { name, control: control as FormControl }; // שמירת השם והקונטרול
});
}
ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }

  openExpand(){
    this.showExpand = !this.showExpand;
    this.property = NarrowBasicTableRowExpandState.OPEN
   //// console.log(this.rowGroup);

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


  get controls(): { [key: string]: FormControl } {
    return this.rowGroup.controls as { [key: string]: FormControl };
  }
  getFormControls(rowGroup: FormGroup): { key: string; value: AbstractControl }[] {
    return Object.entries(rowGroup.controls).map(([key, value]) => ({ key, value }));
  }
}
