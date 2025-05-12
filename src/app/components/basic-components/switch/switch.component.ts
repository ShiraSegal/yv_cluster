import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'yv-cluster-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  @Input() active: boolean = true;
  @Input() text!: string;
  @Output() switchChange = new EventEmitter<boolean>();
  changeStatus(){
    this.active=!this.active;
    this.switchChange.emit(this.active);
  }
}