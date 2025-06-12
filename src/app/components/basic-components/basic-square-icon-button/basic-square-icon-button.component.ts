import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-basic-square-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-square-icon-button.component.html',
  styleUrls: ['./basic-square-icon-button.component.scss']
})
export class BasicSquareIconButtonComponent {
  @Input() icon: IconType;
  @Input() isActive = false;
  @Input() selected: boolean = false;
  // @Input() label: string = '';
  
  @Output() onClick = new EventEmitter<boolean>();

  handleClick() {
      this.isActive=!this.isActive
      this.onClick.emit(this.isActive);
  }
}