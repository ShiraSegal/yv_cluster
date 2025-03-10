import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
<<<<<<< HEAD

=======
import { DataCellType, DataCellValue } from 'src/app/enums/basic-enum';
>>>>>>> origin/yehudit
import { AssigneeComponent } from "../assignee/assignee.component";
import { SliderComponent } from "../slider/slider.component";
import { DataCellType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-data-cells',
  standalone: true,
  imports: [CommonModule, AssigneeComponent, SliderComponent],
  templateUrl: './data-cells.component.html',
  styleUrl: './data-cells.component.scss'
})
export class DataCellsComponent {
  @Input() type: DataCellType = DataCellType.TEXT;
  @Input() data: DataCellValue = DataCellValue;
  @Input() lineDataCells: boolean = false;

  DataCellType = DataCellType;
  DataCellValue=DataCellValue;
  isString(value: any){
    return typeof value === 'string' && value.trim().length > 0;
  }
  isNumber(value: any) {
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

