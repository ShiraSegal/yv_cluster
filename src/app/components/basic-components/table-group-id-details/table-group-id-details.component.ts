import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ButtonType, DataCellType, HeaderCellType, IconButtonLargeType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { BasicTableRowComponent } from '../basic-table-row/basic-table-row.component';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { rootObjectOfClusterGroupDetails } from 'src/app/models/root-object-of-cluster-group-details.model';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { CheckType } from 'src/app/enums/check-enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PieComponentDistributionModalComponent } from '../pie-component-distribution-modal/pie-component-distribution-modal.component';
import { FilterHandlingSuggestionsComponent } from '../filter-handling-suggestions/filter-handling-suggestions.component';
import { log } from 'util';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { group } from 'console';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component';
import { LoadingService } from 'src/app/services/loading.service';
import { ButtonComponent } from '../button/button.component';
import { EnterBookidComponent } from '../../cluster-managment/enter-bookid/enter-bookid.component';

@Component({
  selector: 'yv-cluster-table-group-id-details',
  standalone: true,
  imports: [CommonModule, NarrowBasicTableComponent, TableHeaderComponent, BasicTableRowComponent, NarrowBasicTableRowComponent, IconButtonLargeComponent, FilterHandlingSuggestionsComponent, ReactiveFormsModule, FormsModule, TooltipComponent, ToastNotificationComponent, ButtonComponent],
  templateUrl: './table-group-id-details.component.html',
  styleUrl: './table-group-id-details.component.scss'
})
export class TableGroupIdDetailsComponent {

  @Output() showToastNotification = new EventEmitter<string>();

  #clusterService = inject(ClusterService)
  #loadingService = inject(LoadingService)
  #dialog = inject(MatDialog);
  #fb = inject(FormBuilder)
 dialogEnterBookidRef: MatDialogRef<EnterBookidComponent> | null = null;

  // clusterGroupDetails: rootObjectOfClusterGroupDetails[] = [];
  headerCheckStatus: CheckType = CheckType.UNCHECKED;
  Rows: any[];
  crmLinkList: string[];
  howManyChecked: number = 0; // כמה צ'קים נבחרו
  dialogRef: MatDialogRef<PieComponentDistributionModalComponent> | null = null;
  prefCodeStatus: boolean = false;
  checkedControls: FormControl[] = []; // רק ה־checked של כל שורה
  // showToastNotification: boolean;
  // toastMessage: string = '';
  // toastIcon: IconType; 

  //enums
  ButtonType = ButtonType;
  DataCellType = DataCellType;
  iconType = IconType;
  iconButtonLargeType = IconButtonLargeType;
  NarrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  narrowBasicTableRowLength = NarrowBasicTableRowLength;

  formGroup: FormGroup = this.#fb.group({
    checks: this.#fb.array([]),  // זה ה־FormArray לכל הצ'קים
  });

  get rowsArray(): FormArray {
    return this.formGroup.get('checks') as FormArray;
  }

  getFormControl(index: number): FormControl {
    // console.log("getFormControl", this.rowsArray.at(index) as FormControl);
    return this.rowsArray.at(index) as FormControl;
  }

  getFormControlsArray(index: number): FormControl[] {
    const formGroup = this.rowsArray.at(index) as FormGroup;
    return Object.keys(formGroup.controls).map(key => formGroup.get(key) as FormControl);
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
    // this.#loadingService.show(); // התחלת טעינה
    this.#clusterService.getClusterGroupDetails().subscribe((res: rootObjectOfClusterGroupDetails | null) => {
      if (res && res.d && res.d.clusteredNameRowList) {
        // this.clusterGroupDetails = res;

        this.Rows = res.d.clusteredNameRowList.map(row => {
          return [
            { data: '', type: DataCellType.CHECK, moreData: { checkStatus: CheckType.UNCHECKED } },
            { data: row.BookId, type: DataCellType.LINK, moreData: { linkHRef: 'https://collections.yadvashem.org/en/names/' } },
            { data: row.ExistsClusterId || 'New', type: DataCellType.TEXT, moreData: { prefCode: row.ExistsClusterId || 'New' } },
            { data: row.Score, type: DataCellType.TEXT, moreData: { prefCode: row.Score ?? '' } },
            { data: row.FirstName?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.FirstName?.Code ?? '' } },
            { data: row.lastName?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.lastName?.Code ?? '' } },
            { data: row.FatherFirstName?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.FatherFirstName?.Code ?? '' } },
            { data: row.MotherFirstName?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.MotherFirstName?.Code ?? '' } },
            { data: row.SpouseFirstName?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.SpouseFirstName?.Code ?? '' } },
            { data: row.DateOfBirth?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.DateOfBirth?.Value ?? '' } },
            { data: row.PlaceOfBirth?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.PlaceOfBirth?.Code ?? '' } },
            { data: row.PermanentPlace?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.PermanentPlace?.Code ?? '' } },
            { data: row.Source?.Value ?? '', type: DataCellType.TEXT, moreData: { prefCode: row.Source?.Code ?? '' } },
            { data: IconType.AUTO_CLUSRE_TLIGHT, type: DataCellType.ICON, moreData: { icon: IconType.TRASH_LIGHT } }
          ];
        });
        // this.#loadingService.hide(); // סיום טעינה
        this.rowsArray.clear();
        this.initRowsArray();

        // console.log("this.rowsArray", this.rowsArray);

        // ניתן להאזין לשינויים ב־FormArray אם צריך:
        this.rowsArray.valueChanges.subscribe(values => {
          // console.log('ערכי הצ׳קים:', values);
        });
      } else {
        console.warn("Received null or invalid response from getClusterGroupDetails");
      }
      if (res && res.d && res.d.CrmLinkList) {
        this.crmLinkList = res.d.CrmLinkList.map((item: any) => {
          return item;
        });
        // console.log("this.crmLinkList", this.crmLinkList);
      }
    }, error => {
      console.error("getClusterGroupDetails occurred:", error);
    });
    //האזנה למשתנה twoChosen
    this.checkHowManyChecked()

  }
  //האזנה למשתנה twoChosen

  checkHowManyChecked(): void {
    this.rowsArray.valueChanges.subscribe((controls: any[]) => {
      const checkedCount = controls.filter(control => control.checked).length;

      if (this.howManyChecked !== checkedCount) {
        this.howManyChecked = checkedCount; // עדכון משתנה howManyChecked
      }
    });
  }
  //אתחול ה CHECKS
  initRowsArray() {
    this.Rows.forEach((row, index) => {
      const control = this.#fb.group({
        checked: [false],
        id: [row[1]?.data],

      });
      this.rowsArray.push(control);
      this.checkedControls.push(control.get('checked') as FormControl);
      console.log("this.rowsArray: " + this.rowsArray);
      this.rowsArray.controls.forEach((e) => {
        // console.log('id: ' + e.get('id')?.value);
        // console.log('checked: ' + e.get('checked')?.value);

      })
      // console.log("this.checkedControls: " + this.checkedControls);

    })
  }
  //בחירת ה check  של ה header
  headerCheckChange(checkStatus: CheckType) {
    this.headerCheckStatus = checkStatus;
    // console.log("header table group id check status", this.headerCheckStatus);

    // עדכון checkStatus באובייקט הנתונים המקורי
    this.Rows.forEach((row) => {
      if (row && row[0]?.moreData) {
        row[0].moreData.checkStatus = checkStatus;
      }
    });

    // עדכון שדה 'checked' בכל FormGroup בתוך rowsArray
    this.rowsArray.controls.forEach((group: AbstractControl) => {
      const checkedControl = group.get('checked');
      if (checkedControl instanceof FormControl) {
        checkedControl.setValue(checkStatus === CheckType.CHECKED);
      }
    });
  }

  //מחיקת שורה
  deleteByBookId(bookId: string) {
    this.rowsArray.controls.forEach((row, index) => {
      if (row.get('id')?.value === bookId)
        this.rowsArray.removeAt(index)
    });
    this.Rows = this.Rows.filter(item => item[1].data !== bookId);
    // this.initRowsArray()
    this.checkedControls = [];
    this.rowsArray.controls.forEach((c) => {
      this.checkedControls.push(c.get('checked') as FormControl);
    })
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
  showToastNotificationFunction(result: string) {
    console.log("showToastNotificationFunction", result);
this.showToastNotification.emit(result);
    // this.showToastNotificationFanction(result);
  }

    openEnterBookIdDialog() {
    // this.showToastNotification = false;
    this.dialogEnterBookidRef = this.#dialog.open(EnterBookidComponent, {
      data: true,
      disableClose: true,
      hasBackdrop: true,
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      width: 'auto',  // מאפשר לדיאלוג להתאמת לגודל התוכן
      height: 'auto',

    });

    this.dialogEnterBookidRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('page Data received from dialog:', result);
        // בצע פעולה עם הנתונים שהתקבלו  
        this.showToastNotificationFunction(result.bookId + "  added to the cluster successfully!");
        if (result.bookId === "formIsNotValid") {
          console.log('page Data received from dialog: no data');
          this.showToastNotificationFunction(result.bookId);
        }
      }

    });

  }
  //  showToastNotificationFanction(result: string) {
  //   // if(result !== "null"){
  //   this.showToastNotification = false;
  //   console.log("crm showToastNotificationFanction", result);

  //   if (result === "formIsNotValid") {
  //     this.toastMessage = `Please choose or fill before submitting.`;
  //     this.toastIcon = IconType.XMARK_SOLID;
  //     this.showToastNotification = true;
  //   }
  //   else {
  //     this.showToastNotification = false;
  //     console.log("crm else showToastNotificationFanction", result);

  //     this.toastMessage = `${result}`;
  //     this.toastIcon = IconType.CIRCLE_CHECK_SOLID;
  //     this.showToastNotification = false;
  //     this.showToastNotification = true;
  //     console.log("crm else showToastNotificationFanction after true", this.showToastNotification);

  //   }
  //   // }
  // }
}