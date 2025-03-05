import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType, ButtonIconProperty } from '../../../enums/basic-enum';

@Component({
  selector: 'yv-cluster-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() buttonType: ButtonType = ButtonType.PRIMARY;
  @Input() disabled: boolean = false;
  @Input() isBig: boolean = false;
  @Input() showIcon: boolean = true;
  @Input() iconProperty: ButtonIconProperty = ButtonIconProperty.VARIANT1;
  @Input() icon!: string;

  @Output() onClick = new EventEmitter();

  handleClick() {
    if (!this.disabled) {
   this.onClick.emit();
    }
  }
}
