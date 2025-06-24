import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BasicRadioButtonComponent } from '../basic-radio-button/basic-radio-button.component';
import { RadioButtonListDirection } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-radio-button-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BasicRadioButtonComponent],
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
  @Input() radioButtonArray: string[] = ["a", "b", "c", "d", "other"];
  @Input() radioButtonValuesArray: { key: string, value: string }[];
  //  = [
  //   { key: "1", value: "a" },
  //   { key: "2", value: "b" },
  //   { key: "3", value: "c" },
  //   { key: "4", value: "d" },
  //   { key: "", value: "other" }
  // ];
  @Input() disable!: boolean;
  @Input() direction: RadioButtonListDirection = RadioButtonListDirection.COLUMN;
  @Output() selectionChange = new EventEmitter<string>();

  radioControl = new FormControl();
  radioForm: FormGroup = new FormGroup({ radioControl: this.radioControl });

  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    this.radioControl.valueChanges.subscribe(value => {
      this.onChange(value);
      this.selectionChange.emit(value);
    });
  }

  writeValue(value: string | null): void {
   // // console.log("writeValue", value);
    this.radioControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.radioControl.disable();
    } else {
      this.radioControl.enable();
    }
  }


  onOneRadioButtonChange(value: string): void {
    // console.log("onRadioChange", value);
    if(this.radioControl.value === value){
      value='';
    }
    this.onChange(value); // עדכון הערך
    this.radioControl.setValue(value); // עדכון הערך של FormControl
    this.selectionChange.emit(value); // פליטת האירוע
  }

  onOtherFieldChecked(selectedOption: string) {
    this.radioButtonValuesArray.forEach((item) => {
      if (item.value === 'other') {
        item.key = selectedOption;
      }
    });
    this.radioControl.setValue(selectedOption);
    this.selectionChange.emit(selectedOption);
  }
}


