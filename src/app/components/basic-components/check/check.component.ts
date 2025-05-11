import { CommonModule } from '@angular/common';
import { forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CheckStateType, CheckType } from 'src/app/enums/check-enum';
import { FieldComponent } from '../field/field.component';
import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'yv-cluster-check',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
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
  @Input() type: CheckType =CheckType.UNCHECKED ;
  @Input() state: CheckStateType = CheckStateType.ENABLED;  
  @Input() checkedControl: FormControl;
  @Output() checkStatus= new EventEmitter<CheckType>();


  checkType=CheckType;
  checkStateType=CheckStateType;

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
    // console.log('Before Toggle:', this.Rows, this.rowsFormArray.value);
    if (this.state !== CheckStateType.DISABLED) {
      this.type = this.type === CheckType.CHECKED ? CheckType.UNCHECKED : CheckType.CHECKED;
      if (this.checkedControl) {
        this.checkedControl.setValue(this.type === CheckType.CHECKED, { emitEvent: true });
      }
      this.onChange(this.type); // Notify the form control about the change
      this.onTouched(); // Notify the form control that the component was touched
    }
  }
}
