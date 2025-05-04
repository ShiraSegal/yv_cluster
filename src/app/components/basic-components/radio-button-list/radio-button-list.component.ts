import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BasicRadioButtonComponent } from '../basic-radio-button/basic-radio-button.component';
import { RadioButtonListDirection } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-radio-button-list',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,BasicRadioButtonComponent],
  templateUrl: './radio-button-list.component.html',
  styleUrl: './radio-button-list.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonListComponent),
      multi: true
    }
  ]
})
export class RadioButtonListComponent implements ControlValueAccessor {
  @Input() radioButtonArray:string [] = ["a", "b", "c", "d","other"];
  @Input() radioButtonValuesArray:{key:string,value:string} [] = [{key:"1",value:"a"},{key:"2",value:"b"},{key:"3",value:"c"},{key:"4",value:"d"},{key:"other",value:"other"}];
  @Input() disable!: boolean;
  @Input() direction:RadioButtonListDirection = RadioButtonListDirection.COLUMN;
  @Output() selectionChange = new EventEmitter<string>();

  radioControl = new FormControl<string | null>(null);
  radioForm:FormGroup = new FormGroup({radioControl: this.radioControl});

  
  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.radioControl.setValue(value);
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.radioControl.disable();
    } else {
      this.radioControl.enable();
    }
  }

  
  onOneRadioButtonChange(selectedOption: string) {
    this.radioControl.setValue(selectedOption);
    this.selectionChange.emit(selectedOption);
  }
}


