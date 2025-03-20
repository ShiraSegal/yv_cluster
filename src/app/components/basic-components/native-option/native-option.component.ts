import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { BadgeType, NativeOptionState, NativeOptionType } from 'src/app/enums/basic-enum';
import { BadgeComponent } from '../../badge/badge.component';
import { AssigneeComponent } from '../assignee/assignee.component';

@Component({
  selector: 'yv-cluster-native-option',
  standalone: true,
  imports: [CommonModule,BadgeComponent,AssigneeComponent],
  templateUrl: './native-option.component.html',
  styleUrl: './native-option.component.scss'
})
export class NativeOptionComponent {
  @Input() optionType! : NativeOptionType;
  @Input() optionState! : NativeOptionState;
  optionTypeMain = NativeOptionType;
  optionStateMain = NativeOptionState;
  badgeType = BadgeType;
  Text :String = 'Text';


}
