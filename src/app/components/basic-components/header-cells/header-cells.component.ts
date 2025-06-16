import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckComponent } from "../check/check.component";
import { CommonModule } from '@angular/common';
import { CheckStateType, HeaderCellType } from 'src/app/enums/basic-enum';
import { CheckType } from 'src/app/enums/check-enum';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yv-cluster-header-cells',
  standalone: true,
  imports: [CheckComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './header-cells.component.html',
  styleUrl: './header-cells.component.scss'
})
export class HeaderCellsComponent {
  @Input() data: string;
  @Input() type: HeaderCellType;
  @Input() tableDataForm: FormGroup;

  @Output() sortEvent = new EventEmitter<{ column: string, direction: string }>();
  @Output() checkStatus = new EventEmitter<CheckType>();
  @Output() openDialog = new EventEmitter<boolean>();

  headerCellType = HeaderCellType;
  checkType = CheckType
  checkStateType = CheckStateType
subscription: Subscription = new Subscription();
  ngOnInit() {
    switch(this.data){
      case 'check':
        this.type = HeaderCellType.CHECK;
        break;
      case 'place-older':
        this.type = HeaderCellType.PLACEOLDER;
        break;
      default:
        this.type = HeaderCellType.TEXT;
    }
    this.subscription.add(this.headerCheckbox.valueChanges.subscribe((isChecked) => {
      this.checkChange(isChecked); // Emit the change event
    }));
  }
  get headerCheckbox(): FormControl | null {
    return this.tableDataForm?.get('headerCheckbox') as FormControl;
    
  }

  sortBy(column: string) {
    if (this.type === 'order' || this.type === HeaderCellType.ORDERDOWN) {
      const direction = this.type === 'order' ? 'asc' : 'desc';
      this.sortEvent.emit({ column, direction });

      // Toggle the type between 'order' and 'order-down'
      this.type = this.type === HeaderCellType.ORDER ? HeaderCellType.ORDERDOWN : HeaderCellType.ORDER;
    }
  }

  checkChange(checkStatus: CheckType) {
    this.checkStatus.emit(checkStatus);
  }

  openPeiComponent() {
   // // console.log("openPeiComponent");
    this.openDialog.emit(true);
  }
}
