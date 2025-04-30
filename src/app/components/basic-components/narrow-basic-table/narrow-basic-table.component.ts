import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ButtonIcon, ButtonSize, ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { FieldComponent } from '../field/field.component';
import { SelectComponent } from '../select/select.component';
import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IconType } from 'src/app/enums/icon-enum';
import { FilterSectionComponent } from "../filter-section/filter-section.component";

@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule,NarrowBasicTableRowComponent, TableHeaderComponent, FilterSectionComponent],
  templateUrl: './narrow-basic-table.component.html',
  styleUrl: './narrow-basic-table.component.scss'
})
export class NarrowBasicTableComponent {


  @Input() Headers: { data: string; type: HeaderCellType }[] = [];
  @Input() Rows: {
    property: NarrowBasicTableRowInputState;
    showAction: boolean;
    cells:{ 
      data: string | { 
        text?: string; 
        buttonType?: ButtonType; 
        disabled?: boolean; 
        isBig?: boolean; // Changed from size
        iconType?: IconType; // Changed from buttonIcon
      }; 
      type: DataCellType; 
    }[]
  }[] | undefined = [];

  label: string = 'Select Label';
  primary = ButtonType.PRIMARY
  variant3 = ButtonIconProperty.VARIANT3
iconType = IconType
  // property :NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;
  // cells: { data: string; type: DataCellType }[] = [{data: 'test', type: DataCellType.TEXT},{data: '' ,type: DataCellType.CHECK}];
  stateEnum = State
  nativeOptions = NativeOptionType;
  rowProperty: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;

  nativeOptionswe = [
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
  ];
  #fb = inject(FormBuilder)
  tableDataForm: FormGroup = this.#fb.group({
    rows: this.#fb.array([])
  });
  ngOnInit() {
    debugger
    console.log('Rows on Init:', this.Rows);
    this.Rows?.forEach((row, index) => {
      const control = this.#fb.group({
        checked: [false],
        id: [row.cells[index].data]
      });
      this.rows.push(control);
    });
    console.log("ros", this.Rows![0].cells);
    console.log("tttt", this.tableDataForm);
    
  }
  get rows(): FormArray {
    return this.tableDataForm.get('rows') as FormArray;
  }
  trackByFn(index: number, item: any): any {
    return index;
  }
  onClick() {
    alert('test on click');
    console.log('test on click');
  }
}
