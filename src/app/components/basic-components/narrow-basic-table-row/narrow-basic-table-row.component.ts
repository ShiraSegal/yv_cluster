import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, ButtonType, CheckStateType, DataCellType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';

import { DataCellsComponent } from '../data-cells/data-cells.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';
import { IconType } from 'src/app/enums/icon-enum';
import { Subscription } from 'rxjs';
@Component({
  selector: 'yv-cluster-narrow-basic-table-row',
  standalone: true,
  imports: [CommonModule, DataCellsComponent, ReactiveFormsModule],
  templateUrl: './narrow-basic-table-row.component.html',
  styleUrl: './narrow-basic-table-row.component.scss',
})
export class NarrowBasicTableRowComponent {
  @Input() property: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;
  @Input() length: NarrowBasicTableRowLength;
  @Input() currentTab: AutoClusterTabType;
  @Input() rowGroup : FormGroup;
  @Input() prefCodeStatus: boolean = false;
  @Output() bookIdToDelet = new EventEmitter<string>();
  subscription: Subscription = new Subscription();
  @Input() cells: {
    data: string;
    type: DataCellType;
    moreData?: { [key: string]: any };
  }[] = [];
  @Input() controls!: FormControl[];


  #clusterService = inject(ClusterService)
  currentUserRole = this.#clusterService.currentUser.role;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  autoClusterTabType = AutoClusterTabType
  iconType = IconType;
  buttonType = ButtonType;
  rowGroupControls: { control: FormControl, name: string }[];

  ngOnInit() {
    this.updateControlsArray()
    this.subscription.add(this.rowGroup.valueChanges.subscribe((value) => {
      console.log('RowGroup changed: 💜', value);
          this.updateControlsArray()
        console.log("❄️",this.rowGroupControls );

    }))
  }
  updateControlsArray(){
 this.rowGroupControls = Object.keys(this.rowGroup.controls).map(controlKey => {
      return {
        control: this.rowGroup.controls[controlKey] as FormControl, // קונטרול מסוג FormControl
        name: controlKey // שם הקונטרול
      };
    });
  }
ngOnChanges(changes: SimpleChanges): void {
  if (changes['rowGroup']) {
    this.updateControlsArray();

    this.subscription.unsubscribe(); // נקה את כל המנויים הקודמים
    this.subscription = new Subscription();

    // הירשם מחדש לשינויים בטופס
    this.subscription.add(
      this.rowGroup.valueChanges.subscribe((value) => {
        console.log('RowGroup changed: 💜', value);
        this.updateControlsArray();
      })
    );
  }
}

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  onIconDeletClick() {
    const cellControl = this.rowGroup.get('cellKey'); // 'cellKey' הוא המפתח של התא הרצוי
    const cellData = cellControl?.value?.data;

    if (typeof cellData === 'string') {
      this.bookIdToDelet.emit(cellData);
    } else {
      this.bookIdToDelet.emit('');
    }
  }



}
