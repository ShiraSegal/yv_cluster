import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tab-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-element.component.html',
  styleUrl: './tab-element.component.css'
})
export class TabElementComponent {
  @Input() active: boolean=false;
  @Input() text!: string;
  @Output() tabChange = new EventEmitter<boolean>();

  changeActive(){
    this.active=!this.active;
    this.tabChange.emit(this.active);
  }

}
