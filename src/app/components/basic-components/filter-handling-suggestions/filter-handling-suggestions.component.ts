import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { ButtonType, DataCellType, NativeOptionState, NativeOptionType, PopoverType, State } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../button/button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { SwitchComponent } from '../switch/switch.component';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateClusterComponent } from '../../cluster-managment/create-cluster/create-cluster.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'yv-cluster-filter-handling-suggestions',
  standalone: true,
  imports: [CommonModule,FieldComponent,ButtonComponent,DataCellsComponent,SwitchComponent,FormsModule,TooltipComponent,PopoverComponent],
  templateUrl: './filter-handling-suggestions.component.html',
  styleUrl: './filter-handling-suggestions.component.scss'
})
export class FilterHandlingSuggestionsComponent {
    #dialog = inject(MatDialog);
    @Output() prefCodeStatus = new EventEmitter<boolean>();
    @Input() showTheButtons :boolean = false;
    @Input() numberCRM :number =0;
    dialogRef: MatDialogRef<CreateClusterComponent> | null = null;

  switchState: boolean = false;
  showTooltip:boolean=false;
showPopover:boolean=false;

  stateEnum = State;
  buttonType=ButtonType;
  iconType=IconType;
  dataCellType=DataCellType; 
NativeOptionType=NativeOptionType;
popoverType=PopoverType;

  formData = {
    searchField: '',
    prefCode: false
  };   

    popoverOptionsLink:{
  optionType: NativeOptionType.TEXT;
  optionState: NativeOptionState;
  displayText: string;
}[] = [{optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT, displayText: 'Link 1'},
  {optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT, displayText: 'Link 2'},
  {optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT, displayText: 'Link 3'},
];
     openDialog() {
      console.log("openDialog");
      
     this.dialogRef = this.#dialog.open(CreateClusterComponent, {
      disableClose: false, 
      hasBackdrop: true,
      panelClass: 'custom-dialog',
      autoFocus: false,
      width: 'auto',  // מאפשר לדיאלוג להתאמת לגודל התוכן
      height: 'auto',
    
    });
     }
 ngOnChanges(changes: SimpleChanges) {
    if (changes['showTheButtons']) {
      const newValue = changes['showTheButtons'].currentValue;
      this.onShowTheButtonsChange(newValue);
    }
  }

  onShowTheButtonsChange(value: boolean) {
    console.log('showTheButtons changed:', value);
    // הפעולה שתרצי להריץ
  }
  // onSearchFieldChange(newValue: string) {
  //   this.fieldValue.emit(newValue);

  //   console.log('value changed to:', newValue);
  //   // כאן תוכלי לבצע כל פעולה שתרצי בעת שינוי הערך
  // }
  onPrefCodeChange(state: boolean) {
  this.formData.prefCode = state;
  this.prefCodeStatus.emit(state);
  console.log('Pref code switch:', state);
}
  // onSubmit() {
  //   console.log('Form submitted:', this.formData);
  // }
  handleSwitchChange(state: boolean) {
    this.switchState = state;
    console.log('Switch:', state ? 'דלוק' : 'מכובה');
  }
  onRightLeftClick(){
alert('right left button clicked');

  }
  onUserClick(){
alert('User button clicked');

  }
  onClick() {
    alert('test on click');
    console.log('test on click');
  }
}
