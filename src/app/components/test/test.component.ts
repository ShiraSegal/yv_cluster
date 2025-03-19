import { Component } from '@angular/core';
import { ButtonType, NarrowBasicTableRowInputState } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';



import { DataCellType } from 'src/app/enums/basic-enum';

import { AssigneeComponent } from '../basic-components/assignee/assignee.component';



import { CheckType, CheckStateType } from 'src/app/enums/basic-enum';
import { CheckComponent } from '../basic-components/check/check.component';
import { SliderComponent } from '../basic-components/slider/slider.component';
import { BasicTabComponent } from '../basic-components/basic-tab/basic-tab.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [AssigneeComponent, CommonModule,CheckComponent , SliderComponent , BasicTabComponent ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  CheckType = CheckType;
  CheckStateType = CheckStateType;
  DataCellType=DataCellType;



  tabStatus: string = 'active';
  tabText: string = 'Click to change status';

  onTabChange(isActive: boolean) {
    this.tabStatus = isActive ? 'active' : 'not-active';
    console.log(`Tab status changed to: ${this.tabStatus}`);
  }
}
