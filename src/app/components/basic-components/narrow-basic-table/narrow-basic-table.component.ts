import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowExpandState, NarrowBasicTableRowInputState, NarrowBasicTableRowLength, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormControlState, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { log } from 'console';
import { ChangeDetectorRef } from '@angular/core';
import { ExpandableComponent } from '../expandable/expandable.component';
import { loadavg } from 'os';

@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule,
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
  @Output() HeaderCheckboxToggle = new EventEmitter<void>();
  autoClusterTabType = AutoClusterTabType;
  subscription: Subscription = new Subscription();
  cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.subscription.add(this.tableDataForm.get('headerCheckbox').valueChanges.subscribe((isChecked) => {
      console.log('Header Checkbox changed:', isChecked);
      this.cdr.detectChanges()
    }));
    this.subscription.add(this.rowsFormArray.valueChanges.subscribe((rows) => {
      // Handle changes in the rows dynamically
      // console.log('Rows Form Array Value in Child:', rows);
      this.cdr.detectChanges(); // Trigger change detection manually
    }));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  get rowGroup(): FormGroup[] {
    return this.rowsFormArray.controls as FormGroup[];
  }

  
  onHeaderCheckboxToggle(): void {
    console.log('Header checkbox toggled');
 this.rowsFormArray.controls.forEach((row: FormGroup) => {
  // console.log('row value:', row.value);
  // console.log('row checkkkkkkkkkkkkkkkk:', row.get('check').value);
 row.get('check')?.setValue(this.headerCheckbox.value);
  console.log('row checkkkkkkkkkkkkkkkk:', row.get('check').value);
      const checkboxControl = row.get('check') as FormControl;
      if (checkboxControl) {
        checkboxControl.setValue(this.headerCheckbox.value);
        console.log('Checkbox value set for row:', row.value);
        
      }
    }
    );
    // console.log("tableDataForm:"+this.tableDataForm.controls.);

    this.HeaderCheckboxToggle.emit();
  }


  get headerCheckbox(): FormControl {
    return this.tableDataForm.get('headerCheckbox') as FormControl;
  }
  get rowsFormArray(): FormArray<FormGroup> {
    return this.tableDataForm.get('rowsFormArray') as FormArray<FormGroup>;
  }
}