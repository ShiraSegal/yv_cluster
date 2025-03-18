import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() optionText: string = 'Ariella Kopperman';
  optionType: NativeOptionType = NativeOptionType.ASSIGNEE;
  optionTypeMain = NativeOptionType;
  optionState : NativeOptionState = NativeOptionState.DEFAULT;
  optionStateMain = NativeOptionState;
  badgeType = BadgeType;


}
