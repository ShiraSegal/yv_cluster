import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { AutoClusterTabType, BadgeType, ButtonType, CheckStateType, DataCellType, DataCellValue, IconButtonLargeType } from 'src/app/enums/basic-enum';
import { AssigneeComponent } from "../assignee/assignee.component";
import { BadgeComponent } from '../badge/badge.component';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { CheckComponent } from '../check/check.component';
import { SliderComponent } from '../slider/slider.component';
import { ButtonComponent } from '../button/button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { CheckType } from 'src/app/enums/check-enum';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yv-cluster-data-cells',
  standalone: true,
  imports: [
    ButtonComponent,
    SliderComponent,
    CheckComponent,
    AssigneeComponent,
    BadgeComponent,
    CommonModule,
    IconButtonLargeComponent
    , ReactiveFormsModule,
    SliderComponent,
    CheckComponent,
    AssigneeComponent,
    BadgeComponent,
    IconButtonLargeComponent,
    CommonModule,
  ReactiveFormsModule ],

  templateUrl: './data-cells.component.html',
  styleUrls: ['./data-cells.component.scss']
})

export class DataCellsComponent<T extends DataCellType> {

  #cdr = inject(ChangeDetectorRef);
  // variables
  @Input() type: any;
  @Input() typeText:string
  @Input() data: DataCellValue<T>;




  @Input() moreData: { [key: string]: any }; // אובייקט לפרמטרים נוספים
  @Input() prefCodeStatus;
  @Input() formGroup: FormGroup;
  @Input() currentTab : AutoClusterTabType;
  @Output() expand = new EventEmitter<void>();

  bookId: string = "";
  hRef: string = "";


  //injecting ENUM
  badgeType = BadgeType;
  iconType = IconType;
  buttonType = ButtonType;
  iconButtonLargeType = IconButtonLargeType;
  dataCellType = DataCellType;
  checkStateType = CheckStateType;
  checkType = CheckType;
  autoClusterTabType=AutoClusterTabType
  subscription: Subscription=new Subscription();
  ngOnInit() {
    if(this.type===this.dataCellType.ICON && this.moreData?.['icon']) {
    console.log('moreDataaaaaaaaaaaaaaa:', this.moreData?.['icon'],'dataCellType:', this.type);
  }
    this.type = this.mapType(this.typeText);
   //// console.log('Parent FormGroup:', this.formGroup);
  }
  //   ngOnChanges(changes: SimpleChanges): void {      
  //   // if (changes['data'] ) {
  //   //      console.log('Data Cell changes:', this.data);
            
        
  //   // }
  //     if (changes['prefCodeStatus'] ) {
  //        console.log('Data Cell changes:', this.data);
       
  //       console.log('data cell Pref Code Status changed:', this.prefCodeStatus);        
  //   }
  // }
ngOnDestroy() {
  this.subscription.unsubscribe(); // Unsubscribe to prevent memory leaks
}
  private mapType(typeText: string): DataCellType {
    switch (typeText) {
      case 'check': return DataCellType.CHECK;
      case 'button': return DataCellType.BUTTON;
      case 'assignee': return DataCellType.ASSIGNEE;
      case 'status': return DataCellType.STATUS;
      case 'icon': return DataCellType.ICON;
      default: return DataCellType.TEXT;
    }

    
  }


  rihgtLink() {
    if (this.moreData !== null && typeof this.moreData['linkHRef'] === "string" && this.moreData['linkHRef'].includes('collections.yadvashem.org/en/names/')) {
      this.hRef = this.moreData['linkHRef'] + this.data;
      return this.hRef
    }
    else
      return this.data

  }
  isString(value: any): value is string {
    return typeof value === 'string' && value.trim().length > 0;
  }

  isNumber(value: any): value is number {
    return typeof value === 'number';
  }

  onClick() {
    // Handle other click logic if needed
  }

  triggerExpand() {
    this.expand.emit(); // Emit the expand event
  }
}
