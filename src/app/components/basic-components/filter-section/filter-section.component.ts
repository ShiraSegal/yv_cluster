
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  BadgeType,
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
import { ClusterService } from 'src/app/services/cluster.service';

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
  @Output() onClickAddCluster = new EventEmitter<void>();
  @Output() onFilterValuesChange = new EventEmitter<any[]>();

  filterForm: FormGroup;
  statusAssineeForm: FormGroup;

  stateEnum = State;
  nativeOptions = NativeOptionType;
  iconType = IconType;
  iconButtonLargeType = IconButtonLargeType;
  primary = ButtonType.PRIMARY;
  ButtonType = ButtonType;

  assigneeOptions: {
    optionType: NativeOptionType;
    optionState: NativeOptionState;
    displayText: string;
  }[] = [];

  badgeOptions = [
    {
      optionType: NativeOptionType.STATUS,
      optionState: NativeOptionState.DEFAULT,
      displayText: 'To do',
      property: BadgeType.TODO
    },
    {
      optionType: NativeOptionType.STATUS,
      optionState: NativeOptionState.DEFAULT,
      displayText: 'Done',
      property: BadgeType.DONE
    }
  ];
// #fb= inject( FormBuilder)
  constructor(private fb: FormBuilder, private clusterService: ClusterService) {
    this.filterForm = this.fb.group({
      search: [''],
      date: [null],
      status: [null],
      assignee: [null],
    });

    this.statusAssineeForm = this.fb.group({
      toggleAssignee: [],
      toggleStatus: []
    });

    this.filterForm.valueChanges.subscribe(values => {
      this.onFilterValuesChange.emit(values);
    });

    this.statusAssineeForm.valueChanges.subscribe(val => {
      console.log('statusAssineeForm:', val);
    });

    // קבלת AssigneeList מהשאיבה מהגיסון 
    this.clusterService.AssigneeList$.subscribe(names => {
      this.assigneeOptions = names.map(name => ({
        optionType: NativeOptionType.ASSIGNEE,
        optionState: NativeOptionState.DEFAULT,
        displayText: name
      }));
    });
  }

  onClick() {
    console.log('Submit clicked:', this.filterForm.value);
  }

  onClickAddClusterFunc() {
    this.onClickAddCluster.emit();
  }

  onClickStatus() {}
  onClickAssinee() {}
}
