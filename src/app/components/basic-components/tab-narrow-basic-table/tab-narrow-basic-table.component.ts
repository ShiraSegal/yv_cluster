import { Component } from '@angular/core';
import { AutoClusterTabType } from 'src/app/enums/auto-cluster-tab-enum';

@Component({
  selector: 'yv-cluster-tab-narrow-basic-table',
  standalone: true,
  imports: [],
  templateUrl: './tab-narrow-basic-table.component.html',
  styleUrl: './tab-narrow-basic-table.component.scss'
})
export class TabNarrowBasicTableComponent {

    tabs: { type: AutoClusterTabType }[] = [];
    @Input() newHeaders: { data: string; type: HeaderCellType }[] = [];
    @Input() oldHeaders: { data: string; type: HeaderCellType }[] = [];
    @Input() newRows: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [];
    @Input() oldRows: { property: string; showAction: boolean; cells: { data: string; type: DataCellType }[] }[] = [];
}
