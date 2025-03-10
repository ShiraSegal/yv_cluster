import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CheckStateType, CheckType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss'
})
export class CheckComponent {
  @Input() type: CheckType =CheckType.UNCHECKED ;
  @Input() state: CheckStateType = CheckStateType.ENABLED;
  // @Input() type: CheckType =CheckType.UNSELECTED ;
  // @Input() state: CheckStateType = CheckStateType.ENABLED;

  CheckType=CheckType;
  CheckStateType=CheckStateType;
  
  // toggleCheckbox() {
  //   if (this.state !== CheckStateType.DISABLED) {
  //     this.type = this.type === CheckType.SELECTED ?CheckType.UNSELECTED : CheckType.SELECTED;
  //   }
  // }
  toggleCheckbox() {
    if (this.state !== CheckStateType.DISABLED) {
      this.type = this.type === CheckType.CHECKED ?CheckType.UNCHECKED : CheckType.CHECKED;
    }
  }
}
