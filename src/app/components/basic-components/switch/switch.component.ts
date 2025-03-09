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
  @Input() show: boolean = false;
  @Input() text!: string;
  @Output() switchChange = new EventEmitter<boolean>();
  // show:boolean=false;

  toggle(){
    this.show=!this.show;
    this.switchChange.emit(this.show);
  }
}