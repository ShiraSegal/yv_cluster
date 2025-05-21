import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BadgeType, HeaderCellType, NativeOptionState, NativeOptionType, PopoverHeader, PopoverType, State, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { HeaderCellsComponent } from '../header-cells/header-cells.component';
import { NativeOptionComponent } from '../native-option/native-option.component';
import { BadgeComponent } from '../badge/badge.component';
import { AssigneeComponent } from '../assignee/assignee.component';
import { IconType } from 'src/app/enums/icon-enum';
import { BodyComponent } from '../body/body.component';
import { FieldComponent } from '../field/field.component';

type NativePopoverOption = {
  optionType: NativeOptionType;
  optionState: NativeOptionState;
  displayText?: string;
  property?: BadgeType;
};

@Component({
  selector: 'yv-cluster-popover',
  standalone: true,
  imports: [CommonModule, HeaderCellsComponent, BadgeComponent, AssigneeComponent, NativeOptionComponent, BodyComponent,FieldComponent],
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

  popoverList: NativePopoverOption[];
  header: string;
  size: TextSize = TextSize.MEDIUM;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.SLATE_BLUE;

  // headerCellType = HeaderCellType.TEXT;
  optionType = NativeOptionType;
  optionState = NativeOptionState;
  badgeType = BadgeType;
  stateEnum=State;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit() {
    this.popoverList=this.popoverOptions;
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
    console.log('Selected option:', option.displayText || option.property);
    this.onChange(option.displayText || option.property); // עדכון הערך שנבחר
  }

  filterPopoverList(event: Event): void {
    debugger
  const inputValue = (event.target as HTMLInputElement).value;  
  console.log(inputValue); // כאן תוכלי להשתמש בערך
  // if(inputValue!=''){
 this.popoverOptions=this.popoverList.filter((option) => {
    const displayText = option.displayText || '';
    console.log(displayText.toLowerCase().includes(inputValue.toLowerCase()));
    return displayText.toLowerCase().includes(inputValue.toLowerCase());
  })
  console.log("ppppppppppppppppp",this.popoverOptions);
// }

// else{
//   this.popoverOptions=this.popoverList;
// }
}
}