import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { HeaderCellType, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { HeaderCellsComponent } from "../header-cells/header-cells.component";
import { FormControl } from '@angular/forms';
import { CheckType } from 'src/app/enums/check-enum';

@Component({
  selector: 'yv-cluster-table-header',
  standalone: true,
  imports: [CommonModule, HeaderCellsComponent],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
@Input() headers: { data: string; type: HeaderCellType }[] = [];
@Input() headerCheckboxControl: FormControl;

@Output() checkStatus= new EventEmitter<CheckType>();
@Output() openDialog= new EventEmitter<boolean>();
@Input() length : NarrowBasicTableRowLength;

//injections
headerCellType =   HeaderCellType

//functions
checkChange(checkStatus:CheckType) {
  this.checkStatus.emit(checkStatus);
  console.log(" table header check status", checkStatus)

}
openPeiComponent(){
  console.log("openPeiComponent");
  this.openDialog.emit(true);  
    }
}