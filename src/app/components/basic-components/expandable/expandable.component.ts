import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, ButtonType, CheckStateType, DataCellType, NarrowBasicTableRowExpandState, NarrowBasicTableRowInputState, NarrowBasicTableRowLength } from 'src/app/enums/basic-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClusterService } from 'src/app/services/cluster.service';
import { Subscription } from 'rxjs';
import { IconType } from 'src/app/enums/icon-enum';
@Component({
  selector: 'yv-cluster-expandable',
  standalone: true,
  imports: [CommonModule, DataCellsComponent, ReactiveFormsModule],
  templateUrl: './expandable.component.html',
  styleUrl: './expandable.component.scss'
})
export class ExpandableComponent {
  @Input() property: NarrowBasicTableRowExpandState = NarrowBasicTableRowExpandState.CLOSE;
  @Input() currentTab: AutoClusterTabType;
  @Input() rowGroup : FormGroup<any>;
  @Input() prefCodeStatus: boolean = false;
  @Output() bookIdToDelet = new EventEmitter<string>();
  subscription: Subscription = new Subscription();
  showExpand: boolean = false;
   #clusterService = inject(ClusterService)
   currentUserRole = this.#clusterService.currentUser.role;
   dataCellType = DataCellType;
   checkStateType = CheckStateType;
   autoClusterTabType = AutoClusterTabType
   iconType = IconType;
   buttonType = ButtonType;
   rowGroupControls: { control: FormControl, name: string }[];
textForExpandable:string
textSlice:string
iconForExpand:IconType = IconType.CHEVRON_DOWN_SOLID;
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
      if(controlKey==='errorMessage'){
        this.textForExpandable = this.rowGroup.controls[controlKey].value;
        this.textSlice = this.textForExpandable.slice(0, 85) + '...';
      }
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

  openExpand() {
    this.showExpand = !this.showExpand;
    if (this.showExpand) {
      this.property = NarrowBasicTableRowExpandState.OPEN;
      this.iconForExpand = IconType.CHEVRON_UP_SOLID
    } else {
      this.property = NarrowBasicTableRowExpandState.CLOSE;
      this.iconForExpand = IconType.CHEVRON_DOWN_SOLID
    }
  }
 
}
