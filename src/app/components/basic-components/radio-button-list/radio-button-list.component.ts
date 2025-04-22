import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BasicRadioButtonComponent } from '../basic-radio-button/basic-radio-button.component';

@Component({
  selector: 'yv-cluster-radio-button-list',
  standalone: true,
  imports: [CommonModule, BasicRadioButtonComponent],
  templateUrl: './radio-button-list.component.html',
  styleUrls: ['./radio-button-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonListComponent),
      multi: true,
    },
  ],
})
export class RadioButtonListComponent implements ControlValueAccessor {
  @Input() radioButtonArray: string[] = [];
  @Input() disable: boolean = false;
  @Output() selectionChange = new EventEmitter<string>();

  public internalValue: string | null = null;

  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.internalValue = value;
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onRadioChange(selectedOption: string): void {
    this.internalValue = selectedOption;
    this.onChange(selectedOption); // Notify the form control
    this.selectionChange.emit(selectedOption); // Emit the selectionChange event
  }
}