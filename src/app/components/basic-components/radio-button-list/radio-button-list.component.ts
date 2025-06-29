import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
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
  // @Output() selectionChange = new EventEmitter<string>();

  private value: string | null = null;
  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    console.log('writeValue called with:', value);  
    this.value = value;
    console.log('Updated value:', this.value);
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

  onOneRadioButtonChange(value: string): void {
    console.log('onOneRadioButtonChange called with:', value);
    console.log('Current value before change:', this.value);
    
    if (this.value === value) {
      value = '';
    }
    this.value = value;
    this.onChange(value);
    // this.selectionChange.emit(value);
  }

  onOtherFieldChecked(selectedOption: string) {
    this.radioButtonValuesArray.forEach((item) => {
      if (item.value === 'other') {
        item.key = selectedOption;
      }
    });
    this.value = selectedOption;
    this.onChange(selectedOption);
    // this.selectionChange.emit(selectedOption);
  }

  // isChecked(key: string): boolean {
  //   return this.value === key;
  // }
}
