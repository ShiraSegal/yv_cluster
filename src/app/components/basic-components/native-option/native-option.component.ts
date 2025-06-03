import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeType } from 'src/app/enums/basic-enum';
import { AssigneeComponent } from '../assignee/assignee.component';
import { NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'yv-cluster-native-option',
  standalone: true,
  imports: [CommonModule, BadgeComponent, AssigneeComponent],
  templateUrl: './native-option.component.html',
  styleUrls: ['./native-option.component.scss']
})
export class NativeOptionComponent {
  @Input() optionType!: NativeOptionType;
  @Input() optionState!: NativeOptionState;
  @Input() property?: BadgeType = BadgeType.TODO;


  // 💡 חדש: לשם התצוגה הדינאמית
  @Input() displayText?: string;

  optionTypeMain = NativeOptionType;
  optionStateMain = NativeOptionState;
  badgeType = BadgeType;
}

