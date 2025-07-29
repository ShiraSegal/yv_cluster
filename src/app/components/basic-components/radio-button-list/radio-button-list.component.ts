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

  private value:{ key: string, value: string } | null = null; // Changed to object type to match radioButtonValuesArray structure
  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: { key: string, value: string } ): void {
    console.log('writeValue called with:', value);  
    this.value = value;
    console.log('Updated value:', this.value);
  }
  

  registerOnChange(fn: any): void {
    console.log('registerOnChange called with:', fn);
    
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onOneRadioButtonChange(value: { key: string, value: string } ): void {
    console.log('onOneRadioButtonChange called with:', value.key);
    // console.log('Current value before change:', this.value);
    
    if (this.value === value) {
      value = null;
    }
    this.value = value;
    this.onChange(value.key);
    // this.selectionChange.emit(value);
  }

  onOtherFieldChecked(selectedOption: { key: string, value: string } ) {
    this.radioButtonValuesArray.forEach((item) => {
      if (item.value === 'other') {
        item.key = selectedOption.key;
      }
    });
    this.value = selectedOption;
    this.onChange(selectedOption.key);
    // this.selectionChange.emit(selectedOption);
  }

  // isChecked(key: string): boolean {
  //   return this.value === key;
  // }
}
