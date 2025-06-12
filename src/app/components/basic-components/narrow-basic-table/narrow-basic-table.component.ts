import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, SimpleChanges } from '@angular/core';
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
  narrowBasicTableRowExpandState = NarrowBasicTableRowExpandState
  narrowBasicTableRowLength = NarrowBasicTableRowLength;
  narrowBasicTableRowInputState = NarrowBasicTableRowInputState;
 
  autoClusterTabType = AutoClusterTabType;
  subscription: Subscription = new Subscription();
  cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.subscription.add(this.tableDataForm.get('headerCheckbox').valueChanges.subscribe((isChecked) => {
      console.log('Header Checkbox changed:', isChecked);
    }));
    this.subscription.add(this.rowsFormArray.valueChanges.subscribe((rows) => {
      // Handle changes in the rows dynamically
      console.log('Rows Form Array Value in Child:', rows);
      this.cdr.detectChanges(); // Trigger change detection manually
    }));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


  get headerCheckboxControl(): FormControl {
    return this.tableDataForm.get('headerCheckbox') as FormControl;
  }
  get rowsFormArray(): FormArray<FormGroup> {
    return this.tableDataForm.get('rowsFormArray') as FormArray<FormGroup>;
  }
}
