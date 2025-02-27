import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'yv-cluster-yv-basic-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yv-basic-tab.component.html',
  styleUrl: './yv-basic-tab.component.scss'
})
export class YvBasicTabComponent {
  @Input() active: boolean=false;
  @Input() text!: string;
  @Output() tabChange = new EventEmitter<boolean>();

  changeActive(){
    this.active=!this.active;
    this.tabChange.emit(this.active);
  }

}
