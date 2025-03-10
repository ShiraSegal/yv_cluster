import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YvTextareaComponent } from '../yv-textarea/yv-textarea.component';

@Component({
  selector: 'yv-cluster-basic-radio-button',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './basic-radio-button.component.html',
  styleUrl: './basic-radio-button.component.scss'
})
export class BasicRadioButtonComponent {
  @Input() disable?: boolean;
  @Input() checked?: boolean;
  @Input() text!: string;
  @Output() checkedChange = new EventEmitter<string>();
  changStatus() {
    if (!this.disable) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.text);
    }
  }
}