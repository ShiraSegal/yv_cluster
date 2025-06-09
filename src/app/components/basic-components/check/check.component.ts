import { CommonModule } from '@angular/common';
import {
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'yv-cluster-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckComponent),
      multi: true
    }
  ]
})
export class CheckComponent implements ControlValueAccessor {
  value: boolean = false; // ערך ה-checkbox

  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: boolean): void {
    this.value = value; // עדכון הערך
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  toggleCheckbox(checked: boolean): void {
    this.value = checked; // עדכון הערך
    this.onChange(checked); // מפעיל את הפונקציה שההורה רשם
    this.onTouched(); // מסמן שה-checkbox נגע
  }
}
