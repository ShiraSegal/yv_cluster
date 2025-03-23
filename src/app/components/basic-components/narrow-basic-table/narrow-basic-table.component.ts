import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { YvSelectComponent } from '../yv-select/yv-select.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonIcon, ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState, State } from 'src/app/enums/basic-enum';
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
  // @Input() headers: { data: string; type: HeaderCellType }[] = []
    label: string = 'Select Label'; 
    primary = ButtonType.PRIMARY
    // variant3 = ButtonIconProperty.VARIANT3
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
    // rows: { property: NarrowBasicTableRowInputState, cells: { data: string, type: DataCellType }[] }[] = [
    //   {
    //     property: NarrowBasicTableRowInputState.DEFAULT,
    //     cells: [
    //       { data: 'Cell 1.1', type: DataCellType.TEXT },
    //       { data: 'Cell 1.2', type: DataCellType.TEXT },
    //       { data: 'Cell 1.3', type: DataCellType.TEXT }
    //     ]
    //   },
    //   {
    //     property: NarrowBasicTableRowInputState.DEFAULT,
    //     cells: [
    //       { data: 'Cell 2.1', type: DataCellType.TEXT },
    //       { data: 'Cell 2.2', type: DataCellType.TEXT },
    //       { data: 'Cell 2.3', type: DataCellType.TEXT }
    //     ]
    //   }
    // ]; 
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
