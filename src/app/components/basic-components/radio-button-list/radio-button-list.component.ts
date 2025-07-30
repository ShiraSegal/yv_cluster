import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BasicRadioButtonComponent } from '../basic-radio-button/basic-radio-button.component';
import { RadioButtonListDirection } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-radio-button-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BasicRadioButtonComponent],
  templateUrl: './radio-button-list.component.html',
  styleUrl: './radio-button-list.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonListComponent),
      multi: true
    }
  ]
})
export class RadioButtonListComponent implements ControlValueAccessor {
  @Input() radioButtonValuesArray: { key: string, value: string }[] = [];
  @Input() disable!: boolean;
  @Input() direction: RadioButtonListDirection = RadioButtonListDirection.COLUMN;

  private value: { key: string, value: string } | null = null;
  private onChange: (value: { key: string, value: string } | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: { key: string, value: string } | null): void {
    console.log('writeValue called with:', value);
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onOneRadioButtonChange(selected: { key: string, value: string }): void {
    console.log('onOneRadioButtonChange called with:', selected);
    
    const isSameValue = selected.key === 'other'
      ? this.value?.key === 'other'
      : this.value?.value === selected.value;

    this.value = isSameValue ? null : selected;
    this.onChange(this.value);
  }

  onOtherFieldChecked(customText: string): void {
    const otherObj = this.radioButtonValuesArray.find(v => v.key === 'other');
    if (otherObj) {
      const customValue = { key: otherObj.key, value: customText };
      this.value = customValue;
      this.onChange(customValue);
    }
  }

  isChecked(obj: { key: string, value: string }): boolean {
    if (obj.key === 'other') {
      return this.value?.key === 'other';
    }
    return this.value?.value === obj.value;
  }
}
