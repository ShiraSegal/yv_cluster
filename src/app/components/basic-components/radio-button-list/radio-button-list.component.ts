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
  private onChange: (value: { key: string, value: string } | null) => void = () => {};
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
    console.log('onOneRadioButtonChange called with:', value);
    
    if (this.value === value) {
      value = null;
    }
    this.value = value;
    this.onChange(value);
  }

onOtherFieldChecked(selected: string) {
  const otherObj = this.radioButtonValuesArray.find(v => v.value === 'other');
  if (otherObj) {
    const custom = { key: otherObj.key, value: selected };
    this.value = custom;
    this.onChange(custom);
  }
}


}
