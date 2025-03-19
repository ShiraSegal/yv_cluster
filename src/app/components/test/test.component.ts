import { Component } from '@angular/core';
import { ButtonType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';



import { DataCellType } from 'src/app/enums/basic-enum';

import { AssigneeComponent } from '../basic-components/assignee/assignee.component';



import { CheckType, CheckStateType } from 'src/app/enums/basic-enum';
import { CheckComponent } from '../basic-components/check/check.component';
import { SliderComponent } from '../basic-components/slider/slider.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [AssigneeComponent, CommonModule,CheckComponent , SliderComponent ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  CheckType = CheckType;
  CheckStateType = CheckStateType;
  DataCellType=DataCellType;
}
