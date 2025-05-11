import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'yv-cluster-assignee',
  standalone: true,
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AssigneeComponent),
      multi: true,
    },
  ],
})
export class AssigneeComponent implements ControlValueAccessor {
  @Input() data: string | undefined = 'UnAssignee'; // Default value
  @Output() assigneeChange = new EventEmitter<string>();
  @Input() assigneeControl: FormControl;
  assigneeInitials: string = '';
  truncatedName: string = '';

  onChange: (value: string | undefined) => void = () => {};
  onTouched: () => void = () => {};

  ngOnInit(): void {
    this.updateAssigneeProperties();
  }

  private updateAssigneeProperties(): void {
    if (this.data) {
      const nameParts = this.data.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts[1] : '';
      this.assigneeInitials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
      this.truncatedName = this.data.length > 17 ? `${this.data.substring(0, 17)}...` : this.data;
    } else {
      this.assigneeInitials = '';
      this.truncatedName = '';
    }
  }

  writeValue(value: string | undefined): void {
    this.data = value || '';
    this.updateAssigneeProperties();
  }

  registerOnChange(fn: (value: string | undefined) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  editAssignee(newValue: string): void {
    this.data = newValue;
    this.onChange(this.data);
    this.assigneeChange.emit(this.data);
    this.updateAssigneeProperties();
  
  }
  onBlur(): void {
    this.onTouched();
  }
}