import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BadgeType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BadgeComponent),
    multi: true,
  }],
})
export class BadgeComponent implements ControlValueAccessor {
  @Input() property: BadgeType;

  value: string ;
  valueForCss: string;

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value; // שמירת הערך
    this.valueForCss = value.split(' ')[0] +'-'+ value.split(' ')[1];
    //// console.log('Badge Updated Value:', this.value); // הדפסת הערך
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
