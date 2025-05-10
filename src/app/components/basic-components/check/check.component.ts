import { CommonModule } from '@angular/common';
import { Component, Input,EventEmitter, Output } from '@angular/core';
import { CheckStateType, CheckType } from 'src/app/enums/check-enum';
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
  @Output() checkStatus= new EventEmitter<CheckType>();

  CheckType=CheckType;
  CheckStateType=CheckStateType;

  toggleCheckbox() { 
    if (this.state !== CheckStateType.DISABLED) {
      this.type = this.type === CheckType.CHECKED ?CheckType.UNCHECKED : CheckType.CHECKED;
      this.checkStatus.emit(this.type);
    }
  }
}
