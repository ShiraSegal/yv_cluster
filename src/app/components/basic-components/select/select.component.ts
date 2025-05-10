import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { BadgeType, SelectType, State } from 'src/app/enums/basic-enum';
import { NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { NativeOptionComponent } from '../native-option/native-option.component';

@Component({
  selector: 'yv-cluster-select',
  standalone: true,
  imports: [CommonModule, NativeOptionComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  //  @Input() error: boolean = false;
  //   @Input() disabled: boolean = false;
  @Input() stateEnum: State;
  @Input() label: string;
  // @Input() focused: boolean = false;
  // @Input() populated: boolean = false;
  @Input() default: string;
  @Input() options: string[];
  @Input() selectType: SelectType;

  nativeOptionType:NativeOptionType;
  badgeType=BadgeType;

  state: string = 'default'
  selectedOption:string;
  dropdownOpen = false;
  stateEnumMain = State;
  ngOnInit() {
    switch (this.selectType) {
      case 'status':
        this.nativeOptionType = NativeOptionType.STATUS;
        break;
      case 'assignee':
        this.nativeOptionType = NativeOptionType.ASSIGNEE;
        break;
      case 'text':
        this.nativeOptionType = NativeOptionType.TEXT;
        break;
    }
  }
  toggleDropdown() {
    if (this.stateEnum !== State.DISABLED && this.stateEnum !== State.ERROR) {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }

  selectOption(option:string): void {
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
      // if (this.error) {
      //   this.stateEnum = State.ERROR;
      // } else if (this.disabled) {
      //   this.stateEnum = State.DISABLED;
      // } else if (this.focused) {
      //   this.stateEnum = State.FOCUSED;
      // } else if (this.populated) {
      //   this.stateEnum = State.POPULATED;
      // } else {
      //   this.stateEnum = State.DEFAULT;
      // }
    }

    setOptionsBasedOnSelect( dropdownType: NativeOptionType): void {
      // switch (dropdownType) {
      //   case 'status':
      //       this.nativeOptionType = this.nativeOptionType.STATUS;

      //     break;
      //   case 'assignee':
      //       this.dropdownType = this.nativeOptionType.ASSIGNEE;
      //     break;
      //   default:
      //     this.dropdownType = this.nativeOptionType.TEXT;
      //     break;
      // }
  }

}
