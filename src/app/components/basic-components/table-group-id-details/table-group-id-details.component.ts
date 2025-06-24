import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { AutoClusterTabType, ButtonType, DataCellType, HeaderCellType, IconButtonLargeType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { BasicTableRowComponent } from '../basic-table-row/basic-table-row.component';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { CheckType } from 'src/app/enums/check-enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PieComponentDistributionModalComponent } from '../pie-component-distribution-modal/pie-component-distribution-modal.component';
import { FilterHandlingSuggestionsComponent } from '../filter-handling-suggestions/filter-handling-suggestions.component';
import { log } from 'util';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormControlState, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { group } from 'console';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component';
import { ButtonComponent } from '../button/button.component';
import { EnterBookidComponent } from '../../cluster-managment/enter-bookid/enter-bookid.component';
import { NotifictionService } from 'src/app/services/notifiction.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ClusterGroupWithCrmLinks } from 'src/app/models/cluster-group-with-crm-links.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yv-cluster-table-group-id-details',
  standalone: true,
  imports: [CommonModule, TableHeaderComponent, NarrowBasicTableComponent, FilterHandlingSuggestionsComponent, ReactiveFormsModule, FormsModule, TooltipComponent, ToastNotificationComponent, ButtonComponent],
  templateUrl: './table-group-id-details.component.html',
  styleUrl: './table-group-id-details.component.scss'
})
export class TableGroupIdDetailsComponent {
  @Input() groupId: string;
  // @Output() showToastNotification = new EventEmitter<string>();

  #clusterService = inject(ClusterService)
  #notifictionService = inject(NotifictionService)

  #dialog = inject(MatDialog);
  #fb = inject(FormBuilder)
  dialogEnterBookidRef: MatDialogRef<EnterBookidComponent> | null = null;
  dialogRef: MatDialogRef<PieComponentDistributionModalComponent> | null = null;
  #cdr = inject(ChangeDetectorRef);
  // clusterGroupDetails: rootObjectOfClusterGroupDetails[] = [];
  headerCheckStatus: CheckType = CheckType.UNCHECKED;
  Rows: any[];
  crmLinkList: string[];
  // howManyChecked: number = 0; // כמה צ'קים נבחרו
  theCheckedRows: string[] = []; // רשימה של הצ'קים שנבחרו
  prefCodeStatus: boolean = false;
  checkedControls: FormControl[] = []; // רק ה־checked של כל שורה
  // showToastNotification: boolean;
  // toastMessage: string = '';
  // toastIcon: IconType;
  valueOrCode: string = 'value'; // משתנה לבחירת value או code
  //enums
  ButtonType = ButtonType;
  DataCellType = DataCellType;
  iconType = IconType;
  iconButtonLargeType = IconButtonLargeType;
  NarrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  narrowBasicTableRowLength = NarrowBasicTableRowLength;
  AutoClusterTabType = AutoClusterTabType;

  tableDataForm: FormGroup = this.#fb.group({
    headerCheckbox: new FormControl(false),
    rowsFormArray: this.#fb.array([])
  });
  //כותרות הטבלה
  Headers = [{ data: 'check' },
  { data: 'Book ID' },
  { data: 'Cluster ID' },
  { data: 'Score' },
  { data: 'First Name' },
  { data: 'Last Name' },
  { data: 'Father Name' },
  { data: 'Mother Name' },
  { data: 'Spouse First Name' },
  { data: 'Date of Birth' },
  { data: 'Place of Birth' },
  { data: 'Permanent Place' },
  { data: 'Source' }
  ]

  tableKeys = [
    'check',
    'bookId',
    'existsClusterId',
    'score',
    'firstName',
    'lastName',
    'fatherFirstName',
    'motherFirstName',
    'spouseFirstName',
    'dateOfBirth',
    'placeOfBirth',
    'permanentPlace',
    'source'
  ];
  initialStateBoolean: FormControlState<boolean> = {
    value: false,
    disabled: false
  };
  initialStateString: FormControlState<string> = {
    value: '',
    disabled: false
  };
  subscription: Subscription = new Subscription();
  Res: ClusterGroupWithCrmLinks | null
  ngOnInit() {
    this.#clusterService.getClusterGroupDetails(this.groupId);
    this.subscription.add(this.#clusterService.getClusterGroupDetails(this.groupId).subscribe((res: ClusterGroupWithCrmLinks | null) => {
      this.Res = res;
      this.initRowsArray();
      this.rowsFormArray.valueChanges.subscribe((rowsValue: any[]) => {
        const checkedRows = rowsValue.filter(row => row.check);
        const checkedCount = checkedRows.length;

        // // עדכון מספר הצ׳קים
        // if (this.howManyChecked !== checkedCount) {
        //   this.howManyChecked = checkedCount;
        //   console.log('מספר הצ׳קים שסומנו:', this.howManyChecked);
        // }

        // עדכון מערך bookId
        this.theCheckedRows = checkedRows.map(row => row.bookId);
        console.log('bookId של שורות שנבחרו:', this.theCheckedRows);
      });

    }))
    this.subscription.add(this.headerCheckbox.valueChanges.subscribe((headerCheckBox) => {
      this.onHeaderCheckboxToggle()
    }));
    //האזנה למשתנה twoChosen
    // this.checkHowManyChecked()

  }
  initRowsArray() {
    this.rowsFormArray.clear(); // מנקה את FormArray מהשורות הקודמות
    this.Rows = []; // מאפס את המערך שמכיל את הנתונים לשורות (לרנדר/לתצוגה)

    if (this.Res && this.Res.bookIdDetailsList) {
      for (let row of this.Res.bookIdDetailsList) {
        const rowGroup = this.#fb.group({});

        // checkbox
        const checkControl = new FormControl(this.initialStateBoolean);
        rowGroup.addControl("check", checkControl);

        for (let key of this.tableKeys) {
          if (key === 'check') continue;

          let value = row[key];

          // אם יש אובייקט עם value/code
          if (value && typeof value === 'object' && 'value' in value && 'code' in value) {
            value = value[this.valueOrCode as string] || '';
            console.log('valueOrCode', this.valueOrCode, value);
          }
          rowGroup.addControl(key, new FormControl({ value: value ?? '', disabled: false }));
        }

        this.rowsFormArray.push(rowGroup);
        this.Rows.push(row); // נשמרים גם לוגיקה חיצונית

      }
      console.log('rowGroup', this.rowsFormArray);


    }

    if (this.Res && this.Res.crmLinkList) {
      this.crmLinkList = [...this.Res.crmLinkList];
    }
  }

  // //האזנה למשתנה twoChosen

  // checkHowManyChecked(): void {
  //   console.log("checkHowManyChecked called");

  //   this.rowsFormArray.valueChanges.subscribe((controls: any[]) => {
  //     const checkedCount = controls.filter(control => control.checked).length;

  //     if (this.howManyChecked !== checkedCount) {
  //       this.howManyChecked = checkedCount; // עדכון משתנה howManyChecked
  //     }
  //   });
  // }

  //מחיקת שורה
  deleteByBookId(bookId: string) {
    this.rowsFormArray.controls.forEach((row, index) => {
      if (row.get('id')?.value === bookId)
        this.rowsFormArray.removeAt(index)
    });
    this.Rows = this.Rows.filter(item => item[1].data !== bookId);
    // this.initRowsArray()
    this.checkedControls = [];
    this.rowsFormArray.controls.forEach((c) => {
      this.checkedControls.push(c.get('checked') as FormControl);
    })
  }

  // //בחירת check
  // checkChange(checkStatus: CheckType) {
  //   // // console.log(" TableGroupIdDetailsComponent check status", checkStatus)

  // }
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
    // // console.log("openPeiComponent");
    this.openDialog()
  }

  prefCodeStatusChange(prefCodeStatus: boolean) {
    console.log('PrefCodeStatus changed:', prefCodeStatus, " valueOrCode:", this.valueOrCode);

    this.prefCodeStatus = prefCodeStatus;
    this.valueOrCode = prefCodeStatus ? 'code' : 'value'; // עדכון משתנה valueOrCode לפי סטטוס prefCodeStatus

    this.initRowsArray(); // מאתחל מחדש את כל השורות לפי הערך החדש
    // בקשה מאנגולר לעדכן את המסך
    this.#cdr.detectChanges();
  }
  openEnterBookIdDialog() {
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
        this.Rows.push(result);
        console.log('Updated Rows:', this.Rows);
        // this.i();  
        this.#notifictionService.showToastNotification({
          iconName: this.iconType.SUCCESS_SOLID,
          title: 'Successfull',
          message: result.bookId + "  added to the cluster successfully!",
          duration: 3000
        });
        if (result.bookId === "formIsNotValid") {
          console.log('page Data received from dialog: no data');
        }
      }

    });

  }
  get rowsFormArray(): FormArray<FormGroup> {
    return this.tableDataForm.get('rowsFormArray') as FormArray<FormGroup> ;
  }
  get headerCheckbox(): FormControl {
    return this.tableDataForm.get('headerCheckbox') as FormControl;
  }
  onHeaderCheckboxToggle(): void {
    const isChecked = this.headerCheckbox.value;
    // Update each control in rowsFormArray directly
    this.rowsFormArray.controls.forEach((group, index) => {
      const checkedControl = group.get('check');
      if (checkedControl && checkedControl.value !== isChecked) {
        checkedControl.setValue(isChecked);
      }
    });

    console.log('Updated FormArray:', this.rowsFormArray.value);
    console.log('Updated tableDataForm:', this.tableDataForm.value);
    // Force Angular to detect changes
    // this.cdr.detectChanges();
  }
}
