import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NarrowBasicTableComponent } from '../narrow-basic-table/narrow-basic-table.component';
import { ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { BasicTableRowComponent } from '../basic-table-row/basic-table-row.component';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';

@Component({
  selector: 'yv-cluster-table-group-id-details',
  standalone: true,
  imports: [CommonModule,NarrowBasicTableComponent,TableHeaderComponent,BasicTableRowComponent,NarrowBasicTableRowComponent],
  templateUrl: './table-group-id-details.component.html',
  styleUrl: './table-group-id-details.component.scss'
})
export class TableGroupIdDetailsComponent {
// @Input() Headers: { data: string; type: HeaderCellType }[];
  // @Input() Rows: {
  //   property: NarrowBasicTableRowInputState;
  //   showAction: boolean;
  //   cells:{ 
  //     data: string | { 
  //       text?: string; 
  //       buttonType?: ButtonType; 
  //       disabled?: boolean; 
  //       isBig?: boolean; // Changed from size
  //       iconType?: IconType; // Changed from buttonIcon
  //     }; 
  //     type: DataCellType; 
  //   }[]
  // }[] | undefined = [];

  ButtonType=ButtonType;
  DataCellType=DataCellType;
  NarrowBasicTableRowInputState=NarrowBasicTableRowInputState;
  Headers= [{ data: '', type: HeaderCellType.CHECK },
    { data: 'Book ID', type: HeaderCellType.TEXT },
    { data: 'Cluster ID', type: HeaderCellType.TEXT },
    { data: 'Score', type: HeaderCellType.TEXT },
    { data: 'First Name', type: HeaderCellType.TEXT },
    { data: 'Last Name', type: HeaderCellType.TEXT },
    { data: 'Father Name', type: HeaderCellType.TEXT },
    { data: 'Mother Name', type: HeaderCellType.TEXT },
    { data: 'Spouse First Name', type: HeaderCellType.TEXT },
    { data: 'Date of Birth', type: HeaderCellType.TEXT },
    { data: 'Place of Birth', type: HeaderCellType.TEXT },
    { data: 'Permanent Place', type: HeaderCellType.TEXT },
    { data: 'Source', type: HeaderCellType.TEXT }
    ]

    exampleNarrowRow = [
      { data: '', type: DataCellType.CHECK },
      { data: '454682', type: DataCellType.TEXT },
      { data: 'New', type: DataCellType.TEXT },
      { data: '01/01/2005', type: DataCellType.TEXT },
      { data: 'dsvsdv', type: DataCellType.TEXT },
      { data: 'dsvds', type: DataCellType.TEXT },
      { data: 'sdvdvvdcccc hjbjvv jkhbjk', type: DataCellType.TEXT },
      { data: 'dsvsdv', type: DataCellType.TEXT },
      { data: 'dsvds', type: DataCellType.TEXT },
      { data: 'sdvdvvd', type: DataCellType.TEXT },
      { data: 'dsvsdv', type: DataCellType.TEXT },
      { data: 'dsvds', type: DataCellType.TEXT },
      { data: 'sdvdvvd', type: DataCellType.TEXT }
    ];
    exampleNarrowRow3 = [
      { data: '', type: DataCellType.CHECK },
      { data: '454111', type: DataCellType.TEXT },
      { data: 'New', type: DataCellType.TEXT },
      { data: '02/08/2009', type: DataCellType.TEXT }
    ];
    
     
  }