import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { State } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() focused: boolean = false;
  @Input() populated: boolean = false;
  @Input() defaultOption: string = ''; 
  @Input() options: string[] = [];

  stateEnum: State = State.DEFAULT;
  state: string = 'default';
  selectedOption: string | null = null;
  dropdownOpen = false;
  stateEnumMain = State;

  toggleDropdown() {
    if (this.stateEnum !== State.DISABLED) {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }

  onFocus() {
    if (this.stateEnum !== State.DISABLED) {
      this.stateEnum = State.FOCUSED;
    }
  }

  onBlur() {
    if (this.stateEnum === State.FOCUSED) {
      this.stateEnum = this.selectedOption ? State.POPULATED : State.DEFAULT;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.error) {
      this.stateEnum = State.ERROR;
    } else if (this.disabled) {
      this.stateEnum = State.DISABLED;
    } else if (this.focused) {
      this.stateEnum = State.FOCUSED;
    } else if (this.populated) {
      this.stateEnum = State.POPULATED;
    } else {
      this.stateEnum = State.DEFAULT;
    }
  }
}