import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, ButtonType, CheckStateType, DataCellType, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { ActivatedRoute,Router } from '@angular/router';
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
  @Input() rowGroup : FormGroup<any>;
  @Input() prefCodeStatus: boolean = false;
  @Output() bookIdToDelet = new EventEmitter<string>();
  subscription: Subscription = new Subscription();
  @Input() cells: {
    data: string;
    type: DataCellType;
    moreData?: { [key: string]: any };
  }[] = [];
  @Input() controls!: FormControl[];

  #router = inject(Router);
  #route = inject(ActivatedRoute);

  #clusterService = inject(ClusterService)
  currentUserRole = this.#clusterService.currentUser.role;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  autoClusterTabType = AutoClusterTabType
  iconType = IconType;
  buttonType = ButtonType;
  rowGroupControls: { control: FormControl, name: string }[];
  ngOnInit() {
    console.log('narrow RowGroup', this.rowGroup);
    
    // Initialize rowGroupControls for debugging
    this.rowGroupControls = Object.keys(this.rowGroup.controls).map(controlKey => {
      return {
        control: this.rowGroup.controls[controlKey] as FormControl, // FormControl instance
        name: controlKey // Control name
      };
    });
    this.subscription.add(this.rowGroup.valueChanges.subscribe((value) => {
      console.log('narrow RowGroup changed:', value);
    }))
  }

  //  ngOnChanges(changes: SimpleChanges): void {      
  //     if (changes['prefCodeStatus'] ) {       
  //       console.log('narrow Pref Code Status changed:', this.prefCodeStatus);
  //       this.rowGroupControls = [...this.rowGroupControls];        
  //   }
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  onIconDeletClick() {
    console.log('narrow Icon delete clicked');
    
    const cellControl = this.rowGroup.get('cellKey'); // 'cellKey' הוא המפתח של התא הרצוי
    const cellData = cellControl?.value?.data;

    if (typeof cellData === 'string') {
      this.bookIdToDelet.emit(cellData);
    } else {
      this.bookIdToDelet.emit('');
    }
  }

  onOpenClick(){
    console.log('rowGroup', this.rowGroup);
    console.log('rowGroupControls', this.rowGroupControls);
    console.log('controls', this.controls);
    console.log(this.rowGroup.get('groupID')?.value);
    
    this.#router.navigate(['crmClusters', this.rowGroup.get('groupID')?.value]);
    
    // if(this.currentTab === AutoClusterTabType.AUTO_CLUSTER) {
      // this.#clusterService.openClusterGroupDetails(this.rowGroup.get('groupId')?.value);
    // }
  }

}