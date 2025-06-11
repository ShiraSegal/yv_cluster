import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'yv-cluster-assignee',
  standalone: true,
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

  value: string = '';

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value; // שמירת הערך
   // // console.log('Assignne Updated Value:', this.value); // הדפסת הערך
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
