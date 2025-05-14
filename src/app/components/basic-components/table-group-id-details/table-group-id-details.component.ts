import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ButtonType, DataCellType, HeaderCellType, IconButtonLargeType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { BasicTableRowComponent } from '../basic-table-row/basic-table-row.component';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { RootObjectOfClusterGroupDetails } from 'src/app/models/root-object-of-cluster-group-details.model';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { CheckType } from 'src/app/enums/check-enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PieComponentDistributionModalComponent } from '../pie-component-distribution-modal/pie-component-distribution-modal.component';
import { FilterHandlingSuggestionsComponent } from '../filter-handling-suggestions/filter-handling-suggestions.component';
import { log } from 'util';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-table-group-id-details',
  standalone: true,
  imports: [CommonModule, NarrowBasicTableComponent, TableHeaderComponent, BasicTableRowComponent, NarrowBasicTableRowComponent, IconButtonLargeComponent, FilterHandlingSuggestionsComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './table-group-id-details.component.html',
  styleUrl: './table-group-id-details.component.scss'
})
export class TableGroupIdDetailsComponent {  
  #clusterService = inject(ClusterService)
  #dialog = inject(MatDialog);
  clusterGroupDetails: RootObjectOfClusterGroupDetails[] = [];
  headerCheckStatus: CheckType = CheckType.UNCHECKED;
  Rows: any[];
  twoChosen: boolean = false;
  dialogRef: MatDialogRef<PieComponentDistributionModalComponent> | null = null;
prefCodeStatus: boolean = false;

  //enums
  ButtonType = ButtonType;
  DataCellType = DataCellType;
  iconType = IconType;
  iconButtonLargeType = IconButtonLargeType;
  NarrowBasicTableRowInputState = NarrowBasicTableRowInputState;

  constructor(private fb: FormBuilder) { }

  formGroup: FormGroup = this.fb.group({
    checks: this.fb.array([]),  // זה ה־FormArray לכל הצ'קים
  });

get checksArray(): FormArray {
  return this.formGroup.get('checks') as FormArray;
}
  
  getFormControl(index: number): FormControl {
    // console.log("getFormControl", this.checksArray.at(index) as FormControl);
    return this.checksArray.at(index) as FormControl;
  }
  //כותרות הטבלה
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
            { data: '', type: DataCellType.CHECK, moreData: { checkStatus: CheckType.UNCHECKED } },
            { data: row.BookId, type: DataCellType.LINK, moreData: { linkHRef: 'https://collections.yadvashem.org/en/names/' } },
            { data: row.ExistsClusterId || 'New', type: DataCellType.TEXT, moreData: { prefCode: row.Source?.Code ?? '' }  },
            { data: row.Score, type: DataCellType.TEXT, moreData: { prefCode: row.Score ?? '' }  },
            { data: row.FirstName?.Value ?? '',type: DataCellType.TEXT, moreData: { prefCode: row.FirstName?.Code ?? '' }  },
            { data: row.LastName?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.LastName?.Code ?? '' }  },
            { data: row.FatherFirstName?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.FatherFirstName?.Code ?? '' }  },
            { data: row.MotherFirstName?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.MotherFirstName?.Code ?? '' }  },
            { data: row.SpouseFirstName?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.SpouseFirstName?.Code ?? '' }  },
            { data: row.DateOfBirth?.Value ?? '', type: DataCellType.TEXT , moreData: { prefCode: row.DateOfBirth?.Code ?? '' } },
            { data: row.PlaceOfBirth?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.PlaceOfBirth?.Code ?? '' }  },
            { data: row.PermanentPlace?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.PermanentPlace?.Code ?? '' } },
            { data: row.Source?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.Source?.Code ?? '' } },
            { data: IconType.AUTO_CLUSRE_TLIGHT, type: DataCellType.ICON, moreData: { icon: IconType.TRASH_LIGHT } }
          ];
        });

        this.checksArray.clear();
        for (let i = 0; i < this.Rows.length; i++) {
          this.checksArray.push(new FormControl(false));
        }
        // console.log("this.checksArray", this.checksArray);

        // ניתן להאזין לשינויים ב־FormArray אם צריך:
        this.checksArray.valueChanges.subscribe(values => {
          // console.log('ערכי הצ׳קים:', values);
        });
      } else {
        console.warn("Received null or invalid response from getClusterGroupDetails");
      }
    }, error => {
      console.error("getClusterGroupDetails occurred:", error);
    });

//האזנה למשתנה twoChosen
    this.checksArray.valueChanges.subscribe(values => {
  const checkedCount = values.filter((v: boolean) => v).length;
  const prev = this.twoChosen;
  this.twoChosen = checkedCount >= 2;
  if (this.twoChosen !== prev) {
    console.log('twoChosen updated to:', this.twoChosen);
  }
});
  }
  //בחירת ה check  של ה header
  headerCheckChange(checkStatus: CheckType) {
    this.headerCheckStatus = checkStatus;
    console.log("header table group id check status", this.headerCheckStatus)
    this.Rows.forEach((row) => {
      row[0].moreData.checkStatus = checkStatus;
    });
    this.checksArray.controls.forEach((control: AbstractControl) => {
      (control as FormControl).setValue(checkStatus === CheckType.CHECKED);
    });

  }
  //מחיקת שורה
  deleteByBookId(bookId: string) {
    this.Rows = this.#clusterService.deleteClusteredNameByBookId(this.Rows, bookId);
  }
  //בחירת check
  checkChange(checkStatus: CheckType) {
    console.log(" TableGroupIdDetailsComponent check status", checkStatus)

  }
  openDialog() {
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
  openPeiComponent() {
    console.log("openPeiComponent");
    this.openDialog()
  }

  prefCodeStatusChange(prefCodeStatus: boolean) {
    console.log("prefCodeStatus table", prefCodeStatus);
    this.prefCodeStatus = prefCodeStatus;
  }
}