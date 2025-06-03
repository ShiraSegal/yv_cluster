import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'yv-cluster-basic-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-radio-button.component.html',
  styleUrl: './basic-radio-button.component.scss'
})
export class BasicRadioButtonComponent {
  @Input() disable?: boolean;
  @Input() checked?: boolean;
  @Input() text!: string;
  @Output() checkedChange = new EventEmitter<boolean>();
  changStatus() {
    if (!this.disable) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }
}