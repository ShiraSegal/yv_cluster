import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'yv-cluster-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent {
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string = 'label';
  @Input() focused: boolean = false;
  @Input() populated: boolean = false;
  @Input() default: string = '';
  @Input() options: string[] = [];

  state: string = 'default';
  selectedOption: string | null = null;
  dropdownOpen = false;  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
 
  selectOption(option: string) {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }
  setFocused() {
    this.state = 'focused';
  }
  
  removeFocus() {
    if (!this.selectedOption) {
      this.state = 'default'; 
    } else {
      this.state = 'populated';
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.error) {
      this.state = 'error';
    } else if (this.disabled) {
      this.state = 'disabled';
    } else if (this.focused) {
      this.state = 'focused';
    } else if (this.populated) {
      this.state = 'populated';
    } else {
      this.state = 'default';
    }
  }
}
