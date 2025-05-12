import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { ButtonType, DataCellType, State } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../button/button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { DataCellsComponent } from '../data-cells/data-cells.component';
import { SwitchComponent } from '../switch/switch.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-filter-handling-suggestions',
  standalone: true,
  imports: [CommonModule,FieldComponent,ButtonComponent,DataCellsComponent,SwitchComponent,FormsModule ],
  templateUrl: './filter-handling-suggestions.component.html',
  styleUrl: './filter-handling-suggestions.component.scss'
})
export class FilterHandlingSuggestionsComponent {
  switchState: boolean = false;

  stateEnum = State;
  buttonType=ButtonType;
  iconType=IconType;
  dataCellType=DataCellType; 

  formData = {
    searchField: '',
    prefCode: false
  };
  onPrefCodeChange(state: boolean) {
  this.formData.prefCode = state;
  console.log('Pref code switch:', state);
}
  onSubmit() {
    console.log('Form submitted:', this.formData);
  }
  handleSwitchChange(state: boolean) {
    this.switchState = state;
    console.log('Switch:', state ? 'דלוק' : 'מכובה');
  }
  onCopyClick(){
alert('Copy button clicked');

  }
  onUserClick(){
alert('User button clicked');

  }
  onClick() {
    alert('test on click');
    console.log('test on click');
  }
}
