import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { ButtonType, DataCellType, NativeOptionState, NativeOptionType, PopoverType, State } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../button/button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { SwitchComponent } from '../switch/switch.component';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateClusterComponent } from '../../cluster-managment/create-cluster/create-cluster.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { PopoverComponent } from '../popover/popover.component';
import { EnterBookidComponent } from '../../cluster-managment/enter-bookid/enter-bookid.component';

@Component({
  selector: 'yv-cluster-filter-handling-suggestions',
  standalone: true,
  imports: [CommonModule, FieldComponent, ButtonComponent, DataCellsComponent, SwitchComponent, FormsModule, TooltipComponent, PopoverComponent],
  templateUrl: './filter-handling-suggestions.component.html',
  styleUrl: './filter-handling-suggestions.component.scss'
})
export class FilterHandlingSuggestionsComponent {
  #dialog = inject(MatDialog);

  @Output() prefCodeStatus = new EventEmitter<boolean>();
  @Output() showToastNotification = new EventEmitter<string>();
  @Input() howManyChecked: number = 0;
  @Input() crmLinkList: string[] = [];


  dialogRef: MatDialogRef<CreateClusterComponent> | null = null;
    dialogRefEnterBookid: MatDialogRef<EnterBookidComponent> | null = null;

  numberCRM: number;
  switchState: boolean = false;
  showTooltip: boolean = false;
  showPopover: boolean = false;

  stateEnum = State;
  buttonType = ButtonType;
  iconType = IconType;
  dataCellType = DataCellType;
  NativeOptionType = NativeOptionType;
  popoverType = PopoverType;

  formData = {
    searchField: '',
    prefCode: false
  };

  //     popoverOptionsLink:{
  //   optionType: NativeOptionType.TEXT;
  //   optionState: NativeOptionState;
  //   displayText: string;
  // }[] = [{optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT, displayText: this.crmLinkList[0]},
  //   {optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT, displayText: 'Link 2'},
  //   {optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT, displayText: 'Link 3'},
  // ];
  popoverOptionsLink: {
    optionType: NativeOptionType;
    optionState: NativeOptionState;
    displayText: string;
  }[] = [];
  ngOnInit() {
    this.numberCRM = this.crmLinkList?.length ?? 0;
    this.initPopoverOptionsLink();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //במילוי שלו - שינוי ראשון
    if (changes['crmLinkList'] && Array.isArray(this.crmLinkList)) {
      this.initPopoverOptionsLink();

      this.numberCRM = this.crmLinkList?.length ?? 0;

    }
  }


  initPopoverOptionsLink(): void {
    this.popoverOptionsLink = this.crmLinkList.map(link => ({
      optionType: NativeOptionType.TEXT,
      optionState: NativeOptionState.DEFAULT,
      displayText: link

    }));

  }
  openDialog() {
    console.log("openDialog");

    this.dialogRef = this.#dialog.open(CreateClusterComponent, {
      disableClose: true,
      hasBackdrop: true,
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      width: 'auto',  // מאפשר לדיאלוג להתאמת לגודל התוכן
      height: '100vh',

    });

    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.showToastNotification.emit(result.bookId);
        console.log('page Data received from dialog:', result);

        if (result.bookId === "formIsNotValid") {
          console.log('page Data received from dialog: no data');
        }
      }
    });
  }
  openEnterBookidDialog() {
    // this.showToastNotification = false;
    this.dialogRefEnterBookid = this.#dialog.open(EnterBookidComponent, {
        data:false,
      disableClose: true,
      hasBackdrop: true,
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      width: 'auto',  // מאפשר לדיאלוג להתאמת לגודל התוכן
      height: 'auto',

    });

    this.dialogRefEnterBookid.afterClosed().subscribe((result) => {
      if (result) {
        console.log('page Data received from dialog:', result);
        this.showToastNotification.emit(result.bookId);
        
        if(result.bookId === "formIsNotValid") {
        }
      }

    });
}
  onPrefCodeChange(state: boolean) {
    this.formData.prefCode = state;
    this.prefCodeStatus.emit(state);
    console.log('Pref code switch:', state);
  }

  onRightLeftClick() {
    alert('right left button clicked');

  }
  onUserClick() {
    alert('User button clicked');

  }
}
