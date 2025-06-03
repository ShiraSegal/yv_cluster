import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { CheckStateType, CheckType } from 'src/app/enums/check-enum';

@Component({
  selector: 'yv-cluster-check',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckComponent),
      multi: true
    }
  ]
})
export class CheckComponent implements ControlValueAccessor {
  @Input() state: CheckStateType = CheckStateType.ENABLED;
  @Output() checkStatus = new EventEmitter<boolean>();

  checkType = CheckType;
  checkStateType = CheckStateType;

  isChecked = false; // this will be our model

  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: boolean): void {
    this.isChecked = !!value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.state = isDisabled ? CheckStateType.DISABLED : CheckStateType.ENABLED;
  }
onCheckboxChange(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  this.isChecked = inputElement.checked;
  this.toggleCheckbox(this.isChecked);
}
  toggleCheckbox(checked: boolean): void {
    if (this.state !== CheckStateType.DISABLED) {
      this.isChecked = checked;
      this.checkStatus.emit(checked);
      this.onChange(checked);
      this.onTouched();
    }
  }
}
