
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
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-icon-button-large',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './icon-button-large.component.html',
  styleUrls: ['./icon-button-large.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IconButtonLargeComponent),
      multi: true
    }
  ]
})
export class IconButtonLargeComponent implements ControlValueAccessor {
  @Input() icon!: IconType;
  @Input() property!: IconButtonLargeType;

  @Output() onClick = new EventEmitter<void>();

  // לשימוש פנימי של formControl
  private onChange = (_: any) => {};
  private onTouched = () => {};

  private _value: boolean = false;

  writeValue(value: boolean): void {
    this._value = !!value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // אפשר להוסיף לוגיקת disabled כאן
  }

  handleClick(): void {
    this._value = !this._value;
    this.onClick.emit();
    this.onChange(this._value);
    this.onTouched();
  }

  get isSelected(): boolean {
    return this._value;
  }
}
