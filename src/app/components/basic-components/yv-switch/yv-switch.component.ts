import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'yv-cluster-yv-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yv-switch.component.html',
  styleUrl: './yv-switch.component.scss'
})
export class YvSwitchComponent {
  @Input() show: boolean = false;
  @Input() text!: string;
  @Output() switchChange = new EventEmitter<boolean>();
  // show:boolean=false;

  toggle(){
    this.show=!this.show;
    this.switchChange.emit(this.show);
  }
}