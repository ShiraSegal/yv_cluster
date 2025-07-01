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
  @Output() openDialog = new EventEmitter<boolean>();
  @Input() currentTab: AutoClusterTabType;
  #clusterService = inject(ClusterService)
  currentUserRole = this.#clusterService.currentUser.role;
  autoClusterTabType = AutoClusterTabType
  //injections
  headerCellType = HeaderCellType
  subscription: Subscription = new Subscription();
  ngOnInit() {
   
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

<<<<<<< HEAD
  openPeiComponent() {
    // // console.log("openPeiComponent");
    this.openDialog.emit(true);
  }

  checkChange(event:string){
    
  }
=======
>>>>>>> 50bcdad (some changes in css table)
}