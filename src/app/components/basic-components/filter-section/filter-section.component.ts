
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  ButtonSize,
  ButtonType,
  IconButtonLargeType,
  NativeOptionState,
  NativeOptionType,
  State
} from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { ButtonComponent } from '../button/button.component';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { SelectComponent } from '../select/select.component';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'yv-cluster-filter-section',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    IconButtonLargeComponent,
    SelectComponent,
    FieldComponent
  ],
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent {
  @Input() buttonText: string = 'New Cluster';
  @Input() icon: IconType = IconType.PLUS_LIGHT;

  filterForm: FormGroup;

  // enums
  stateEnum = State;
  nativeOptions = NativeOptionType;
  iconType = IconType;
  iconButtonLargeType = IconButtonLargeType;
  primary = ButtonType.PRIMARY;
  ButtonType = ButtonType;

  assigneeOptions = [
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
  ];

  badgeOptions = [
    { optionType: NativeOptionType.STATUS, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.STATUS, optionState: NativeOptionState.DEFAULT }
  ];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      search: [''],
      date: [null],
      status: [null],
      assignee: [null],
      toggleAssignee: [false],
      toggleStatus: [false]
    });

    this.filterForm.valueChanges.subscribe(val => {
      console.log('form value:', val);
    });
  }

  onClick() {
    console.log('Submit clicked:', this.filterForm.value);
  }

  @Output() toggleAssigneeClicked = new EventEmitter<void>(); // Output event
  onClick2(): void {
    debugger
    this.toggleAssigneeClicked.emit(); // Emit the event
  }
}
