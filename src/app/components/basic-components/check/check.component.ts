import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CheckStateType, CheckType } from 'src/app/enums/check-enum';

@Component({
  selector: 'yv-cluster-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss'
})
export class CheckComponent implements ControlValueAccessor {
  @Input() type: CheckType =CheckType.UNCHECKED ;
  @Input() state: CheckStateType = CheckStateType.ENABLED;  

  CheckType=CheckType;
  CheckStateType=CheckStateType;


 onChange: (value: CheckType) => void = () => {};
 onTouched: () => void = () => {};

  writeValue(value: CheckType): void {
    this.type = value || CheckType.UNCHECKED;
  }
  registerOnChange(fn: (value: CheckType) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.state = isDisabled ? CheckStateType.DISABLED : CheckStateType.ENABLED;
  }
  

  toggleCheckbox() {
    if (this.state !== CheckStateType.DISABLED) {
      this.type = this.type === CheckType.CHECKED ? CheckType.UNCHECKED : CheckType.CHECKED;
      this.onChange(this.type); // Notify the form control about the change
      this.onTouched(); // Notify the form control that the component was touched
    }
  }
}
