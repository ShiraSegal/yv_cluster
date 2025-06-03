import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'yv-cluster-basic-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-tab.component.html',
  styleUrl: './basic-tab.component.scss'
})
export class BasicTabComponent {
  // @Input() status:StatusActiveOrNotActive=StatusActiveOrNotActive.ACTIVE;
  @Input() active: boolean;
  @Input() text: string;
  @Output() tabChange = new EventEmitter<boolean>();

  changeStatus(){
    this.active=!this.active;
    this.tabChange.emit(this.active);
  }

}
