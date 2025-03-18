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
  // @Input() active: boolean=false;
  @Input() status: string='active';
  @Input() text!: string;
  @Output() tabChange = new EventEmitter<boolean>();

  changeStatus(){
    this.status=='active'?this.status='not-active':this.status='active';
    this.tabChange.emit(this.status=='active');
  }

}
