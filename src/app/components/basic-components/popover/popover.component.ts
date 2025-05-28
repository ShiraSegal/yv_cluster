import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BadgeType, HeaderCellType, NativeOptionState, NativeOptionType, PopoverHeader, PopoverType, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { HeaderCellsComponent } from '../header-cells/header-cells.component';
import { NativeOptionComponent } from '../native-option/native-option.component';
import { BadgeComponent } from '../badge/badge.component';
import { AssigneeComponent } from '../assignee/assignee.component';
import { IconType } from 'src/app/enums/icon-enum';
import { BodyComponent } from '../body/body.component';

type NativePopoverOption = {
  optionType: NativeOptionType;
  optionState: NativeOptionState;
  displayText?: string;
  property?: BadgeType;
};

@Component({
  selector: 'yv-cluster-popover',
  standalone: true,
  imports: [CommonModule, HeaderCellsComponent, BadgeComponent, AssigneeComponent, NativeOptionComponent, BodyComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PopoverComponent),
      multi: true,
    },
  ],
})
export class PopoverComponent implements ControlValueAccessor {
  @Input() type: PopoverType;
  @Input() popoverOptions: NativePopoverOption[];

  header: string;
  size: TextSize = TextSize.MEDIUM;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.SLATE_BLUE;

  // headerCellType = HeaderCellType.TEXT;
  optionType = NativeOptionType;
  optionState = NativeOptionState;
  badgeType = BadgeType;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit() {
    if (this.type === 'status') {
      this.header = 'Status';
    } else if (this.type === 'assignee') {
      this.header = 'Assign Responsible';
    } else {
      this.header = 'Link To CRM';
    }
  }

  writeValue(value: any): void {
    // Implement logic to update the component's value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement logic to handle disabled state
  }

  onSelectedOption(option: NativePopoverOption): void {
   // console.log('Selected option:', option.displayText || option.property);
    this.onChange(option.displayText || option.property); // עדכון הערך שנבחר
  }
}
