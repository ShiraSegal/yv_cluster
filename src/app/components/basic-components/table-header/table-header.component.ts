import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter, inject, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, HeaderCellType, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { HeaderCellsComponent } from "../header-cells/header-cells.component";
import { FormControl } from '@angular/forms';
import { CheckType } from 'src/app/enums/check-enum';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
  selector: 'yv-cluster-table-header',
  standalone: true,
  imports: [CommonModule, HeaderCellsComponent],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
@Input() headers: { data: string }[] = [];
@Input() length : NarrowBasicTableRowLength;
@Output() checkStatus= new EventEmitter<CheckType>();
@Output() openDialog= new EventEmitter<boolean>();
@Input() headerCheckboxControl: FormControl;
@Input() currentTab : AutoClusterTabType;
 #clusterService=inject(ClusterService)
currentUserRole = this.#clusterService.currentUser.role;
autoClusterTabType=AutoClusterTabType
//injections
headerCellType =   HeaderCellType

//functions
  ngOnChanges(changes: SimpleChanges) {
    if (changes['headers']) {
      this.headers = changes['headers'].currentValue;
    }
  }
checkChange(checkStatus:CheckType) {
  this.checkStatus.emit(checkStatus);
 // console.log(" table header check status", checkStatus)
}
openPeiComponent(){
 // console.log("openPeiComponent");
  this.openDialog.emit(true);
    }
}
