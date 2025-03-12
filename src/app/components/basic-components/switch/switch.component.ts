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
  @Input() status: string = "active";
  @Input() text!: string;
  @Output() switchChange = new EventEmitter<boolean>();
  toggle(){
    this.status=="active"?this.status='not-active':this.status='active';
    this.switchChange.emit(this.status=="active");
  }
}