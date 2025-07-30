import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { State } from 'src/app/enums/basic-enum';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'yv-cluster-basic-radio-button',
  standalone: true,
  imports: [CommonModule, FormsModule, FieldComponent],
  templateUrl: './basic-radio-button.component.html',
  styleUrl: './basic-radio-button.component.scss'
})
export class BasicRadioButtonComponent {
  @Input() disable?: boolean;
  @Input() checked?: boolean;
  @Input() text!: string;
  @Output() checkedChange = new EventEmitter<string>();
  @Output() fieldValue = new EventEmitter<string>();

  stateEnum = State;

  formData = {
    field: '',
  };

  onClicked() {
    if (!this.disable) {
      this.checkedChange.emit(this.text);
    }
    if (this.text === 'other') {
      this.fieldValue.emit(this.formData.field);
    }
  }

  onfieldChange(newValue: string) {
    if (this.text === 'other') {
      this.fieldValue.emit(this.formData.field);
    }
  }
}