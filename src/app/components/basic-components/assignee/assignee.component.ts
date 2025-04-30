import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'yv-cluster-assignee',
  standalone: true,
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss'],
})
export class AssigneeComponent implements ControlValueAccessor {
  @Input() data: string | undefined = "Racheli Liff"; // Set default value

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
    this.data = value || "Racheli Liff"; // Use default if no value is provided
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
    this.updateAssigneeProperties();
  }
}