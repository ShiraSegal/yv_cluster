
import { CommonModule } from '@angular/common';
import {
  Component,
  forwardRef,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { State } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldComponent),
      multi: true
    }
  ]
})
export class FieldComponent implements ControlValueAccessor {
  @Input() property: State = State.DEFAULT;
  @Input() label: string = '';
  @Input() placeholder: string = '';

  stateEnum = State;
  value: string = '';

  private onChange = (_: any) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.property = isDisabled ? State.DISABLED : State.DEFAULT;
  }

  onInputChange(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }

  onBlur(): void {
    this.onTouched();
  }
}