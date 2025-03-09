import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yv-cluster-basic-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-toggle.component.html',
  styleUrl: './basic-toggle.component.scss'
})
export class BasicToggleComponent {
  @Input() rightSelected: boolean = false;
  @Input() rightText!: string;
  @Input() leftText!: string;
  @Output() toggleChange = new EventEmitter<string>();
  changStatus() {
    this.rightSelected = !this.rightSelected;
    if (this.rightSelected)
      this.toggleChange.emit(this.rightText);
    else
      this.toggleChange.emit(this.leftText);
  }
}