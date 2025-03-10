import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicRadioButtonComponent } from '../basic-radio-button/basic-radio-button.component';

@Component({
  selector: 'yv-cluster-radio-button-list',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,BasicRadioButtonComponent],
  templateUrl: './radio-button-list.component.html',
  styleUrl: './radio-button-list.component.scss'
})
export class RadioButtonListComponent {
  @Input() radioButtonArray:string [] = ["a", "b", "c", "d","other"];
  @Input() disable!: boolean;
  @Output() selectionChange = new EventEmitter<string>();

  radioControl = new FormControl<string | null>(null);
  radioForm = new FormGroup({radioControl: this.radioControl});

  onRadioChange(selectedOption: string) {
    this.radioControl.setValue(selectedOption);
    this.selectionChange.emit(selectedOption);
  }
}


