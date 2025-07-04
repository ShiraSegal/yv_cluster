import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowExpandState, NarrowBasicTableRowInputState, NarrowBasicTableRowLength, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormControlState, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, map, Observable, startWith, Subscription } from 'rxjs';
import { log } from 'console';
import { ChangeDetectorRef } from '@angular/core';
import { ExpandableComponent } from '../expandable/expandable.component';

@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule,
    AsyncPipe,
    ReactiveFormsModule,
    NarrowBasicTableRowComponent,
    TableHeaderComponent,
    ExpandableComponent
  ],
  templateUrl: './narrow-basic-table.component.html',
  styleUrl: './narrow-basic-table.component.scss',
})
export class NarrowBasicTableComponent {
  @Input() currentTab: AutoClusterTabType;
  @Input() Headers: { data: string }[];
  @Input() tableDataForm: FormGroup;
  @Input() length: NarrowBasicTableRowLength;
  narrowBasicTableRowExpandState = NarrowBasicTableRowExpandState
  narrowBasicTableRowLength = NarrowBasicTableRowLength;
  narrowBasicTableRowInputState = NarrowBasicTableRowInputState;
  autoClusterTabType = AutoClusterTabType;
  subscription: Subscription = new Subscription();
  @Input() prefCodeStatus;

rowGroups$ = new BehaviorSubject<FormGroup[]>([]);
  ngOnInit() {
    console.log('narrow tableDataForm', this.tableDataForm);
    

      this.subscription.add(
    this.rowsFormArray.valueChanges.subscribe((v) => {
      this.updateRowGroups();
    })
  );
  }
updateRowGroups() {
  this.rowGroups$.next(this.rowsFormArray.controls as FormGroup[]);
}
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  get rowGroup(): FormGroup[] {
    return this.rowsFormArray.controls as FormGroup[];
  }




  get headerCheckbox(): FormControl {
    return this.tableDataForm.get('headerCheckbox') as FormControl;
  }
  get rowsFormArray(): FormArray<FormGroup> {
    return this.tableDataForm.get('rowsFormArray') as FormArray<FormGroup>;
  }
  trackByIndex(index: number, item: AbstractControl): number {
    return index;
  }
  deleteRowByBookId(bookId: string) {
    // this.rowsFormArray.controls.forEach((row, index) => {
    //   if (row.get('id')?.value === bookId)
    //     this.rowsFormArray.removeAt(index)
    // });
    // this.Rows = this.Rows.filter(item => item[1].data !== bookId);
    // // this.initRowsArray()
    // this.checkedControls = [];
    // this.rowsFormArray.controls.forEach((c) => {
    //   this.checkedControls.push(c.get('checked') as FormControl);
    // })
console.log('deleteRowByBookId called with bookId:', bookId);

    this.rowGroup.forEach((row, index) => {
      console.log('delete: ', bookId);
      
      if(row.controls['bookId'].value===bookId) {
        
        this.rowsFormArray.removeAt(index);
        this.updateRowGroups(); // Update the row groups after deletion
        
      }
  })
   
  }
}
