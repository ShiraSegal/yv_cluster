import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType} from '../../../enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @Input() text: string;
  @Input() buttonType: ButtonType ;
  @Input() disabled: boolean = false;
  @Input() isBig: boolean ;
  @Input() iconType!: IconType;

  @Output() onClick = new EventEmitter<void>();
 
  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
