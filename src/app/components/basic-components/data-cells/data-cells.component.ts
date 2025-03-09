import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataCellType } from 'src/app/enums/data-cell-enum';
import { AssigneeComponent } from "../assignee/assignee.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'yv-cluster-data-cells',
  standalone: true,
  imports: [CommonModule, AssigneeComponent, SliderComponent],
  templateUrl: './data-cells.component.html',
  styleUrl: './data-cells.component.scss'
})
export class DataCellsComponent {
  @Input() data: string | number | null = null;
  @Input() type: DataCellType = DataCellType.TEXT;
  @Input() lineDataCells: boolean = false;

  DataCellType = DataCellType;
  isString(value: any): value is string {
    return typeof value === 'string' && value.trim().length > 0;
  }
  isNumber(value: any): value is number {
    return typeof value === 'number';
  }
  getFirstName(fullName: string): string {
    return fullName.split(' ')[0] || '';
  }
  getLastName(fullName: string): string {
    const words = fullName.trim().split(' ');
    return words.length > 1 ? words[words.length - 1] : '';
  }
}

