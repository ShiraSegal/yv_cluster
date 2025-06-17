import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AutoClusterTabType, ButtonType, CheckStateType, DataCellType, NarrowBasicTableRowExpandState, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';
import { Subscription } from 'rxjs';
import { IconType } from 'src/app/enums/icon-enum';
import { log } from 'util';
@Component({
  selector: 'yv-cluster-expandable',
  standalone: true,
  imports: [CommonModule, DataCellsComponent, ReactiveFormsModule],
  templateUrl: './expandable.component.html',
  styleUrl: './expandable.component.scss'
})
export class ExpandableComponent {
  @Input() property: NarrowBasicTableRowExpandState = NarrowBasicTableRowExpandState.CLOSE;
  @Input() currentTab: AutoClusterTabType;
  @Input() rowGroup : FormGroup<any>;
  @Input() prefCodeStatus: boolean = false;
  @Output() bookIdToDelet = new EventEmitter<string>();
  subscription: Subscription = new Subscription();
  showExpand: boolean = false;
   #clusterService = inject(ClusterService)
   currentUserRole = this.#clusterService.currentUser.role;
   dataCellType = DataCellType;
   checkStateType = CheckStateType;
   autoClusterTabType = AutoClusterTabType
   iconType = IconType;
   buttonType = ButtonType;
   rowGroupControls: { control: FormControl, name: string }[];

   ngOnInit() {
    this.rowGroupControls = Object.keys(this.rowGroup.controls).map(controlKey => {
      return {
        control: this.rowGroup.controls[controlKey] as FormControl, // קונטרול מסוג FormControl
        name: controlKey // שם הקונטרול
      };
    });
    this.subscription.add(this.rowGroup.valueChanges.subscribe((value) => {
      console.log('RowGroup changed:', value);
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  openExpand() {
    this.showExpand = !this.showExpand;
    if (this.showExpand) {
      this.property = NarrowBasicTableRowExpandState.OPEN;
    } else {
      this.property = NarrowBasicTableRowExpandState.CLOSE;
    }
  }
 
}
