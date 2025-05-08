import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { BadgeType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BadgeComponent),
      multi: true,
    },
  ],
})
export class BadgeComponent implements ControlValueAccessor {
  @Input() property: BadgeType = BadgeType.TODO;
  @Input() badgeControl: FormControl; // Accept the FormControl directly

  switchState(): void {
    const newState =
      this.badgeControl.value === BadgeType.TODO ? BadgeType.DONE : BadgeType.TODO;
    this.badgeControl.setValue(newState); // Update the FormControl value
  }
  // ControlValueAccessor methods
  onChange: (value: BadgeType) => void = () => {};
  onTouched: () => void = () => {};

  // Called when the value is written to the component
  writeValue(value: BadgeType): void {
    if (value !== undefined) {
      this.property = value;
    }
  }

  // Registers a callback function to call when the value changes
  registerOnChange(fn: (value: BadgeType) => void): void {
    this.onChange = fn;
  }

  // Registers a callback function to call when the component is touched
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}