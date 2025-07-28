import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonListDirection } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-radio-button',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ]
})
export class RadioButtonComponent implements ControlValueAccessor {
  @Input() radioButtonValuesArray: { key: string, value: string }[] = [];
  @Input() disable: boolean = false;
  @Input() direction: RadioButtonListDirection = RadioButtonListDirection.COLUMN;

  value: string;
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  selectOption(option: { key: string, value: string }) {
    if (this.disable) return;
    this.value = option.value;
    this.onChange(option.value);
    this.onTouched();
  }
}
