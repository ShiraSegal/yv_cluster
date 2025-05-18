import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { NativeOptionState, NativeOptionType, State } from 'src/app/enums/basic-enum';
import { NativeOptionComponent } from '../native-option/native-option.component';

@Component({
  selector: 'app-yv-select',
  standalone: true,
  imports: [CommonModule,NativeOptionComponent],
  templateUrl: './yv-select.component.html',
  styleUrl: './yv-select.component.css'
})
export class YvSelectComponent {
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() focused: boolean = false;
  @Input() populated: boolean = false;
  @Input() default: string = '';
  @Input() options: { optionType: NativeOptionType; optionState: NativeOptionState }[] = [];

  stateEnum: State = State.DEFAULT;
  state :string = 'default'
  selectedOption: { optionType: NativeOptionType; optionState: NativeOptionState } | null = null;
  dropdownOpen = false; 
  stateEnumMain = State;

  toggleDropdown() {
    if (this.stateEnum !== State.DISABLED && this.stateEnum !== State.ERROR) {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
 
  selectOption(option: { optionType: NativeOptionType; optionState: NativeOptionState }) {
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