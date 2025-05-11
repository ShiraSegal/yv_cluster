import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ButtonType, DataCellType, HeaderCellType, IconButtonLargeType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { BasicTableRowComponent } from '../basic-table-row/basic-table-row.component';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { RootObjectOfClusterGroupDetails } from 'src/app/models/RootObjectOfClusterGroupDetails';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { CheckType } from 'src/app/enums/check-enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PieComponentDistributionModalComponent } from '../pie-component-distribution-modal/pie-component-distribution-modal.component';
import { FilterHandlingSuggestionsComponent } from '../filter-handling-suggestions/filter-handling-suggestions.component';

@Component({
  selector: 'yv-cluster-table-group-id-details',
  standalone: true,
  imports: [CommonModule, NarrowBasicTableComponent, TableHeaderComponent, BasicTableRowComponent, NarrowBasicTableRowComponent,IconButtonLargeComponent,FilterHandlingSuggestionsComponent],
  templateUrl: './table-group-id-details.component.html',
  styleUrl: './table-group-id-details.component.scss'
})
export class TableGroupIdDetailsComponent {
  #clusterService = inject(ClusterService)
  clusterGroupDetails: RootObjectOfClusterGroupDetails[] = [];
  headerCheckStatus: CheckType = CheckType.UNCHECKED;
  Rows: any[];

  ButtonType = ButtonType;
  DataCellType = DataCellType;
  iconType= IconType;
  iconButtonLargeType = IconButtonLargeType;
  NarrowBasicTableRowInputState = NarrowBasicTableRowInputState;

  Headers = [{ data: '', type: HeaderCellType.CHECK },
  { data: 'Book ID', type: HeaderCellType.TEXT },
  { data: 'Cluster ID', type: HeaderCellType.TEXT },
  { data: 'Score', type: HeaderCellType.TEXT },
  { data: 'First Name', type: HeaderCellType.TEXT },
  { data: 'Last Name', type: HeaderCellType.TEXT },
  { data: 'Father Name', type: HeaderCellType.TEXT },
  { data: 'Mother Name', type: HeaderCellType.TEXT },
  { data: 'Spouse First Name', type: HeaderCellType.TEXT },
  { data: 'Date of Birth', type: HeaderCellType.TEXT },
  { data: 'Place of Birth', type: HeaderCellType.TEXT },
  { data: 'Permanent Place', type: HeaderCellType.TEXT },
  { data: 'Source', type: HeaderCellType.TEXT },
  { data: '', type: HeaderCellType.MORE }
  ]



  ngOnInit() {
    this.#clusterService.getClusterGroupDetails().subscribe((res: RootObjectOfClusterGroupDetails | null) => {
      if (res && res.d && res.d.ClusteredNameRowList) {
        // this.clusterGroupDetails = res;

        this.Rows = res.d.ClusteredNameRowList.map(row => {
          return [
            { data: '', type: DataCellType.CHECK,moreData:{checkStatus:CheckType.UNCHECKED} },
            { data: 'https://collections.yadvashem.org/en/names/'+row.BookId, type: DataCellType.LINK },
            { data: row.ExistsClusterId || 'New', type: DataCellType.TEXT },
            { data: row.Score, type: DataCellType.TEXT },
            { data: row.FirstName?.Value ?? '', type: DataCellType.TEXT },
            { data: row.LastName?.Value ?? '', type: DataCellType.TEXT },
            { data: row.FatherFirstName?.Value ?? '', type: DataCellType.TEXT },
            { data: row.MotherFirstName?.Value ?? '', type: DataCellType.TEXT },
            { data: row.SpouseFirstName?.Value ?? '', type: DataCellType.TEXT },
            { data: row.DateOfBirth?.Value ?? '', type: DataCellType.TEXT },
            { data: row.PlaceOfBirth?.Value ?? '', type: DataCellType.TEXT },
            { data: row.PermanentPlace?.Value ?? '', type: DataCellType.TEXT },
            { data: row.Source?.Value ?? '', type: DataCellType.TEXT },
            { data: IconType.AUTOCLUSRETLIGHT, type: DataCellType.ICON ,moreData:{icon: IconType.TRASH}}
          ];
        });

        console.log("exampleNarrowRow", this.Rows);
      } else {
        console.warn("Received null or invalid response from getClusterGroupDetails");
      }
    }, error => {
      console.error("getClusterGroupDetails occurred:", error);
    });
  }

  headerCheckChange(checkStatus:CheckType) {
    this.headerCheckStatus = checkStatus;
    console.log("header table group id check status", this.headerCheckStatus)
    this.Rows.forEach((row) => {
      row[0].moreData.checkStatus = checkStatus;
    });
  }
  deleteByBookId(bookId: string) {
    this.Rows = this.#clusterService.deleteClusteredNameByBookId(this.Rows, bookId);
  }
  checkChange(checkStatus:CheckType) {
    console.log(" TableGroupIdDetailsComponent check status", checkStatus)

  }
  searchValue(value: string){
console.log("searchValue", value);

  }

  //////////////////////
  // #dialog = inject(MatDialog);
 dialogRef: MatDialogRef<PieComponentDistributionModalComponent> | null = null;
 #dialog = inject(MatDialog);
 openDialog() {
  console.log("openDialog");
  
 this.dialogRef = this.#dialog.open(PieComponentDistributionModalComponent, {
  data: { title: 'Data Distribution' },
  disableClose: true, 
  hasBackdrop: true,
  panelClass: 'custom-dialog',
  autoFocus: false,
  width: 'auto',  // מאפשר לדיאלוג להתאמת לגודל התוכן
  height: 'auto',

});
 }
 openPeiComponent(){
  console.log("openPeiComponent");
  this.openDialog()
    }
}