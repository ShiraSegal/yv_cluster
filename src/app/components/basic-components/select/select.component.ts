
import {
  Component,
  forwardRef,
  Input,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { State } from 'src/app/enums/basic-enum';
import { NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { NativeOptionComponent } from '../native-option/native-option.component';

@Component({
  selector: 'yv-cluster-select',
  standalone: true,
  imports: [CommonModule, NativeOptionComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() focused: boolean = false;
  @Input() populated: boolean = false;
  @Input() default: string = '';
  @Input() options: { optionType: NativeOptionType; optionState: NativeOptionState }[] = [];
  @Input() dropdownType: NativeOptionType = NativeOptionType.ASSIGNEE;

  nativeOptionType = NativeOptionType;
  stateEnumMain = State;
  stateEnum: State = State.DEFAULT;
  selectedOption: { optionType: NativeOptionType; optionState: NativeOptionState } | null = null;
  dropdownOpen = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  toggleDropdown() {
    if (this.stateEnum !== State.DISABLED && this.stateEnum !== State.ERROR) {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }

  selectOption(option: { optionType: NativeOptionType; optionState: NativeOptionState }): void {
    this.selectedOption = option;
    this.dropdownOpen = false;
    this.stateEnum = State.POPULATED;
    this.onChange(option);
    this.onTouched();
  }

  onFocus() {
    if (this.stateEnum !== State.DISABLED) {
      this.stateEnum = State.FOCUSED;
    }
  }

  onBlur() {
    this.onTouched();
    if (this.stateEnum === State.FOCUSED) {
      this.stateEnum = this.selectedOption ? State.POPULATED : State.DEFAULT;
    }
  }

  writeValue(obj: any): void {
    this.selectedOption = obj;
    this.stateEnum = obj ? State.POPULATED : State.DEFAULT;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.stateEnum = isDisabled ? State.DISABLED : State.DEFAULT;
  }

  ngOnChanges(changes: SimpleChanges): void {
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

  setOptionsBasedOnSelect(dropdownType: NativeOptionType): void {
    switch (dropdownType) {
      case 'status':
        this.dropdownType = this.nativeOptionType.STATUS;
        break;
      case 'assignee':
        this.dropdownType = this.nativeOptionType.ASSIGNEE;
        break;
      default:
        this.dropdownType = this.nativeOptionType.TEXT;
        break;
    }
  }
}
