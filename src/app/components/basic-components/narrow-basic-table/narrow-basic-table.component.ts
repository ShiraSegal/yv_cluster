import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {  ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { FieldComponent } from '../field/field.component';
import { SelectComponent } from '../select/select.component';
import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule,SelectComponent,ButtonComponent,NarrowBasicTableRowComponent,TableHeaderComponent,FieldComponent],
  templateUrl: './narrow-basic-table.component.html',
  styleUrl: './narrow-basic-table.component.scss'
})
export class NarrowBasicTableComponent {


  @Input() Headers: { data: string; type: HeaderCellType }[]= [];
  @Input() Rows: {
    property: NarrowBasicTableRowInputState;
    showAction: boolean;
    cells: { data: string; type: DataCellType }[]
  }[] | undefined = [];

    label: string = 'Select Label';
    primary = ButtonType.PRIMARY
    variant3 = ButtonIconProperty.VARIANT3
    icon=IconType.PLUS_REGULAR
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
    trackByFn(index: number, item: any): any {
      return index;
    }
    onClick()
  {
    alert('test on click');
    console.log('test on click');
  }
}
