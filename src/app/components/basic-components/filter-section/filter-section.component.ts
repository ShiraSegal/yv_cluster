
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  BadgeType,
  ButtonType,
  IconButtonLargeType,
  NativeOptionState,
  NativeOptionType,
  PopoverType,
  State
} from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { ButtonComponent } from '../button/button.component';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { SelectComponent } from '../select/select.component';
import { FieldComponent } from '../field/field.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { PopoverComponent } from '../popover/popover.component';
import { FilterNames } from 'src/app/enums/auto-cluster-table-enum';

@Component({
  selector: 'yv-cluster-filter-section',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconButtonLargeComponent,
    SelectComponent,
    FieldComponent,
    PopoverComponent
  ],
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent {
  #fb=inject(FormBuilder)
  #clusterService=inject(ClusterService)
  @Input() buttonText: string = 'New Cluster';
  @Input() icon: IconType = IconType.PLUS_LIGHT;
  @Input() iconsVisible: boolean = false;
  @Input() Filters :FilterNames[] = [];
  @Output() onClickAddCluster = new EventEmitter<void>();
  @Output() onFilterValuesChange = new EventEmitter<any[]>();
currentUserRole = this.#clusterService.currentUser.role;

  ngOnInit() {
   // // console.log('Filters received in filter-section:', this.Filters); // Debugging log
  }

  filterForm: FormGroup;
  statusAssineeForm: FormGroup;
  popOverTypeEnum = PopoverType;
  filterNames = FilterNames;
  popOverType : PopoverType = PopoverType.ASSIGNEE;
  visiblePopover: PopoverType | null = null;


  stateEnum = State;
  nativeOptions = NativeOptionType;
  iconType = IconType;
  iconButtonLargeType = IconButtonLargeType;
  primary = ButtonType.PRIMARY;
  buttonType = ButtonType;

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

    this.statusAssineeForm = this.#fb.group({
      toggleAssignee: [],
      toggleStatus: []
    });

    this.filterForm.valueChanges.subscribe(values => {
      this.onFilterValuesChange.emit(values);
    });

    this.statusAssineeForm.valueChanges.subscribe(val => {
     // // console.log('statusAssineeForm:', val);
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
  showPopover(type: PopoverType): void {
    this.visiblePopover = type;
  }

  hidePopover(): void {
    this.visiblePopover = null;
  }
  onClick() {
   // // console.log('Submit clicked:', this.filterForm.value);
  }

  onClickAddClusterFunc() {
    this.onClickAddCluster.emit();
  }

  onClickStatus() {}
  onClickAssinee() {}
}
