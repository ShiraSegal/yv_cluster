import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderCellsComponent } from "../header-cells/header-cells.component";
import { HeaderCellType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-table-header',
  standalone: true,
  imports: [CommonModule, HeaderCellsComponent],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
@Input() headers: { data: string; type: HeaderCellType }[] = [];
HeaderCellType =   HeaderCellType
}
