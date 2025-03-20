import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// import { HeaderCellType } from 'src/app/enums/header-cell-enum';
import { HeaderCellType } from 'src/app/enums/basic-enum';
import { HeaderCellsComponent } from "../header-cells/header-cells.component";

@Component({
  selector: 'yv-cluster-table-header',
  standalone: true,
  imports: [CommonModule, HeaderCellsComponent],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {

}
