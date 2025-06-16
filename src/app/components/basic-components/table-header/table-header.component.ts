import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, HeaderCellType, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { HeaderCellsComponent } from "../header-cells/header-cells.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckType } from 'src/app/enums/check-enum';
import { ClusterService } from 'src/app/services/cluster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yv-cluster-table-header',
  standalone: true,
  imports: [CommonModule, HeaderCellsComponent,ReactiveFormsModule],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
  @Input() headers: { data: string }[] = [];
  @Input() length: NarrowBasicTableRowLength;
  @Input() tableDataForm: FormGroup;
  @Output() checkStatus = new EventEmitter<CheckType>();
  @Output() openDialog = new EventEmitter<boolean>();
  @Output() headerCheckboxToggle = new EventEmitter<void>();
  @Input() currentTab: AutoClusterTabType;
  #clusterService = inject(ClusterService)
  currentUserRole = this.#clusterService.currentUser.role;
  autoClusterTabType = AutoClusterTabType
  //injections
  headerCellType = HeaderCellType
  subscription: Subscription = new Subscription();
  ngOnInit() {
    this.subscription.add(this.tableDataForm.get('headerCheckbox').valueChanges.subscribe((isChecked) => {
      console.log('Header Checkbox changed:', isChecked);
      this.headerCheckboxToggle.emit(); // Emit the toggle event
    }));
  }
  get headerCheckbox(): FormControl {
    return this.tableDataForm.get('headerCheckbox') as FormControl;
  }
  //functions
  ngOnChanges(changes: SimpleChanges) {
    if (changes['headers']) {
      this.headers = changes['headers'].currentValue;
    }
  }
  checkChange(checkStatus: CheckType) {
    this.checkStatus.emit(checkStatus);
    // // console.log(" table header check status", checkStatus)
  }
  openPeiComponent() {
    // // console.log("openPeiComponent");
    this.openDialog.emit(true);
  }
}