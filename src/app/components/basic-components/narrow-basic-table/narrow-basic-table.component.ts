import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { YvSelectComponent } from '../yv-select/yv-select.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonIcon, ButtonIconProperty, ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState, NativeOptionState, NativeOptionType, State } from 'src/app/enums/basic-enum';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule,YvSelectComponent,ButtonComponent,NarrowBasicTableRowComponent,TableHeaderComponent,FieldComponent],
  templateUrl: './narrow-basic-table.component.html',
  styleUrl: './narrow-basic-table.component.scss'
})
export class NarrowBasicTableComponent {
  
  @Input() tableHeaders: { data: string; type: HeaderCellType }[] = []
  @Input() tableRows: { property: NarrowBasicTableRowInputState; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = []
    label: string = 'Select Label';  
    primary = ButtonType.PRIMARY
    variant3 = ButtonIconProperty.VARIANT3
    icon=ButtonIcon.PLUS
    property :NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;
    // cells: { data: string; type: DataCellType }[] = [{data: 'test', type: DataCellType.TEXT},{data: '' ,type: DataCellType.CHECK}];
    stateEnum = State
    headers: { data: string; type: HeaderCellType }[] = [
      {data: '', type: HeaderCellType.CHECK},
      { data: 'ClusterId ', type: HeaderCellType.TEXT },
      { data: 'Comments', type: HeaderCellType.TEXT },
      { data: 'Date of report', type: HeaderCellType.TEXT }
      
    ];

    rowProperty: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;

  // Define the cells for the row
    rowCells: { data: string; type: DataCellType }[] = [
    { data: '', type: DataCellType.CHECK },
    { data: 'Cell 2', type: DataCellType.TEXT },
    { data: 'NEW', type: DataCellType.TEXT },
    { data: 'Cell 3', type: DataCellType.TEXT }

  ] ;
  nativeOptions = [
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
  ];

    @Input() showAction: boolean = false;

    trackByFn(index: number, item: any): any {
      return index; 
    }
    onClick()
  {
    alert('test on click');
    console.log('test on click');
  }
}
