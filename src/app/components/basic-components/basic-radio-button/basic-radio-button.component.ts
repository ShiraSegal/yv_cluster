import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldComponent } from '../field/field.component';
import { State } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-basic-radio-button',
  standalone: true,
  imports: [CommonModule,FormsModule,FieldComponent],
  templateUrl: './basic-radio-button.component.html',
  styleUrl: './basic-radio-button.component.scss'
})
export class BasicRadioButtonComponent {
  @Input() disable?: boolean;
  @Input() checked?: boolean;
  @Input() text!: string;
  @Output() checkedChange = new EventEmitter<boolean>();
  stateEnum = State;
  changStatus() {
    if (!this.disable) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }
}