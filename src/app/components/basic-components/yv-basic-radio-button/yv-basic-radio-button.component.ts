import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'yv-cluster-yv-basic-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yv-basic-radio-button.component.html',
  styleUrl: './yv-basic-radio-button.component.scss'
})
export class YvBasicRadioButtonComponent {
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