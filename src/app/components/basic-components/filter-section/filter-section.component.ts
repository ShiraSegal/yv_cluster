import { Component, Input } from '@angular/core';
import { ButtonIcon, ButtonSize, ButtonType, IconButtonLargeType, NativeOptionState, NativeOptionType, State } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { IconType } from 'src/app/enums/icon-enum';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { SelectComponent } from '../select/select.component';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'yv-cluster-filter-section',
  standalone: true,
  imports: [CommonModule,ButtonComponent,IconButtonLargeComponent,SelectComponent,FieldComponent],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent {

  @Input() buttonText: string = 'test';
  @Input() icon:ButtonIcon = ButtonIcon.PLUS;
 stateEnum = State;
  ButtonSize = ButtonSize;
  primary = ButtonType.PRIMARY
 nativeOptions = NativeOptionType;

  iconType = IconType;//  types of icons.
    iconButtonLargeType = IconButtonLargeType;
  assigneeOptions = [
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
  ];
  badgeOptions = [
    { optionType: NativeOptionType.STATUS, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.STATUS, optionState: NativeOptionState.DEFAULT },
  ];
  onClick() {
    alert('test on click');
    console.log('test on click');
  }
}
