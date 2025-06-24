import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-assignee',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AssigneeComponent),
    multi: true,
  }],
})
export class AssigneeComponent implements ControlValueAccessor {
  @Input() data: string;
  sliceText: string;
  value: string;

  getInitials(input: string): string {
    if (input) {
      const names = input.split(' ');
      if (names.length > 1) {
        return names[0][0] + names[1][0];
      } else if (names.length === 1) {
        return names[0][0];
      }
    }
    return '';
  }

  onChange: (value: string) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(value: string): void {
    this.value = value; // שמירת הערך
    this.sliceText = this.getInitials(this.data) || this.getInitials(this.value) || 'UN'; // עדכון sliceText
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // פונקציה נוספת לעדכון הערך
  updateValue(newValue: string): void {
    this.value = newValue;
    this.onChange(this.value); // קריאה ל-onChange עם הערך החדש
  }
}
