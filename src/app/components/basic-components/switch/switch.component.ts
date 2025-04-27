import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { StatusActiveOrNotActive } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  @Input() status:StatusActiveOrNotActive=StatusActiveOrNotActive.ACTIVE;
  @Input() text!: string;
  @Output() switchChange = new EventEmitter<boolean>();
  toggle(){
    this.status===StatusActiveOrNotActive.ACTIVE?this.status=StatusActiveOrNotActive.NOT_ACTIVE:this.status=StatusActiveOrNotActive.ACTIVE;
    this.switchChange.emit(this.status=="active");
  }
}