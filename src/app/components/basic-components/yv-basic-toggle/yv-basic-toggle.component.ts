import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'yv-cluster-yv-basic-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yv-basic-toggle.component.html',
  styleUrl: './yv-basic-toggle.component.scss'
})
export class YvBasicToggleComponent {
  @Input() status: boolean = false;
  @Input() rightText!: string;
  @Input() leftText!: string;
  @Output() toggleChange = new EventEmitter<boolean>();
  changStatus(){
    this.status=!this.status;
    this.toggleChange.emit(this.status);
  }
}